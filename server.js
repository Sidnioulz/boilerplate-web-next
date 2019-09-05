// Base dependencies.
const next = require('next');
const express = require('express');
const http = require('http');

// HTTPS / Security dependencies.
const fs = require('fs');
const https = require('https');
const helmet = require('helmet');

// Commonly needed dependencies
// const bodyParser = require('body-parser');

// Read env and initialise Next.
const port = parseInt(process.env.PORT, 10) || 3000;
const securePort = parseInt(process.env.SECUREPORT, 10) || 3443;
const dev = process.env.NODE_ENV !== 'production';
const domainName = process.env.DOMAIN_NAME || 'example.com';
const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Initialise the Express server serving Next's files and other static folders and services.
  const expressApp = express();

  // Serve the ACME challenge folder for certificate renewals.
  expressApp.use(
    express.static(`${__dirname}/acme-challenge`, {
      maxage: dev ? '0' : '365d',
    }),
  );

  // In production, add Helmet headers and redirect to HTTPS. In dev, serve in HTTP.
  if (dev) {
    expressApp.get('*', (req, res) => nextHandle(req, res));
  } else {
    expressApp.use(helmet());
    expressApp.get('*', (req, res) => ((req.secure)
      ? nextHandle(req, res)
      : res.redirect(301, `https://${req.hostname}${req.url}`)));
  }

  // Start the HTTP server available in all environments.
  const httpServer = http.createServer(expressApp);
  httpServer.listen(port, (err) => {
    if (err) throw err;
  });

  // On production, start the HTTPS server too.
  if (!dev) {
    const privateKey = fs.readFileSync(`/etc/letsencrypt/live/${domainName}/privkey.pem`, 'utf8');
    const certificate = fs.readFileSync(`/etc/letsencrypt/live/${domainName}/cert.pem`, 'utf8');
    const ca = fs.readFileSync(`/etc/letsencrypt/live/${domainName}/chain.pem`, 'utf8');

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca,
    };

    const httpsServer = https.createServer(credentials, expressApp);
    httpsServer.listen(securePort, (err) => {
      if (err) throw err;
    });
  }
});
