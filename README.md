# Web Portfolio

This project contains the code for my personal portfolio website. It's based on [React](https://reactjs.org/), uses the [Next.js](https://nextjs.org/) architecture for server-side rendering, is linted with [ESLint AirBnB](https://www.npmjs.com/package/eslint-config-airbnb) and continuously built and deployed with [CircleCI](https://circleci.com).

The goal of this project is both for me to have a Web presence and to practice and showcase modern Web technologies. This project is released under the GNU GPL licence. The project itself is a portfolio for someone who is a designer, software engineer and researcher.


## Installation

```
git clone https://github.com/Sidnioulz/web-portfolio.git
cd web-portfolio
npm install
echo SASS_PATH=./node_modules:./sass >> ~/.env
```

## Build and Use Locally

```
npm run dev
```

Visit [localhost:3000](localhost:3000) to get started.

Also, `PORT` and `SECUREPORT` are used by `server.js` and should be defined in the deployment environment and development environment.


## Deploy

I use CircleCI to deploy automatically after each commit. You'll probably want to familiarise yourself with the [CircleCI tutorial for JavaScript](https://circleci.com/docs/2.0/language-javascript/).

### SSL Certificates
The server is pre-configured to provide a static folder than can be used for ACME challenges, and is also pre-configured to read certificates from `/etc/letsencrypt/live` when run in production mode.

To setup your certificates, you'll need to `cd` to the web-portfolio folder on your server, and pass a command to certbot to the tune of:
```
certbot certonly --webroot -w ./acme-challenge -d <yourdomain.com>
```


### My Server

I manually SCP my build to my personal Linux server, which is set up to have a `circleci` user with read/write access to all of `/var/www`.

CircleCI has a copy of a private RSA key designed specifically to allow logging in as this user, as per the [CircleCI SSH Doc](https://circleci.com/docs/2.0/add-ssh-key/). My server also has a [GitHub Deploy Key](https://developer.github.com/v3/guides/managing-deploy-keys) to allow it to pull the latest version of the server configuration and dependencies.

I have a [systemd](https://www.freedesktop.org/wiki/Software/systemd/) service set up to start my Web portfolio using `npm run start`, so I update my app on the server, replace the old build with the one made by CircleCI (less CO2 output than rebuilding!), and restart my service.

I have set the server to listen to the ports identified by environment variables `PORT` and `SECUREPORT` for HTTP and HTTPS connections. Default values are 3000 and 3443 if not set. I define those in my server's Systemd service file and use IPTABLES to redirect the actual OS's ports to allow for web-portfolio to be run as an unprivileged user. I recommend you do the same.

To receive mails, please set environment variables `MAIL_DAEMON_NAME` to be a contact name (e.g. John Doe <jdoe@foo.net>), `MAIL_RECIPIENT` to be a valid email address, and `DOMAIN` to be your domain name. The `TIMEZONE` variable should be your timezone string (e.g. 'Europe/Paris'), so that dates of contact forms are shown with regard to that timezone.

### CircleCI Environment

You will need to set the variable `SASS_PATH` to `./node_modules:./sass`. You may also need a `FIGMA_TOKEN` variable. Finally, you may need `SSH_HOST` and `SSH_USER` if you don't change the deployment pipeline.

### Alternatives

There are dozens of different ways to do this, and you're likely to want to do something different. The CircleCI doc already has a [list of supported integrations](https://circleci.com/docs/2.0/deployment-integrations/) to help you get started.

To debug your CircleCI config, the following commands from the [CircleCI CLI](https://circleci.com/docs/2.0/local-cli/) may be useful:

```
circleci config validate
circleci config process
circleci local execute
```
