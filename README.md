# Boilerplate Web Next

This project contains code for a boilerplate Next.js website, to use for throwaway projects. It spares the setup of a toolchain, linting tools and basic utilities. It's based on [React](https://reactjs.org/), uses the [Next.js](https://nextjs.org/) architecture for server-side rendering, is linted with [ESLint AirBnB](https://www.npmjs.com/package/eslint-config-airbnb) and continuously built and deployed with [CircleCI](https://circleci.com).

 his project is released under the GNU GPL licence, version 3 or later.


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

### Integrations

There are dozens of different ways to do this, and you're likely to want to do something different. The CircleCI doc already has a [list of supported integrations](https://circleci.com/docs/2.0/deployment-integrations/) to help you get started.

To debug your CircleCI config, the following commands from the [CircleCI CLI](https://circleci.com/docs/2.0/local-cli/) may be useful:

```
circleci config validate
circleci config process
circleci local execute
```
