# TODO List




## Client Development

### Learn React, I guess
* https://reactjs.org/tutorial/tutorial.html


### Core CSS
* Write a `services/css.js` service with all my usual functions
* Use [Figgo](https://github.com/B3nnyL/figgo) or [Figma SCSS](https://figma-scss.now.sh/) or a custom script to sync my Figma design assets into a JS source file
** Dont forget to report in README that I need to define FIGMA_TOKEN in CI env and the .env file
* Write the core CSS for my portfolio based on my brand identity
* Load Web Fonts, ensure [proper performance](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)

### Page Transitions
https://github.com/illinois/next-page-transitions

### Use Redux
* [Learn Redux](https://egghead.io/courses/getting-started-with-redux)
* [Integration with Next](https://medium.com/@diamondgfx/nextjs-lessons-learned-part-1-a5a8d442450f)
* Use Redux's global state tree

And because Redux is noisy, streamline the definition process *if I end up keeping Redux for event handling*.

* [Ducks](https://medium.com/p/d63c41b7035c/)
* [redux-define](https://github.com/smeijer/redux-define)
* [redux-interactions](https://github.com/convoyinc/redux-interactions)

### Use RxJS Observables
* http://reactivex.io/rxjs/manual/tutorial.html
* https://www.youtube.com/watch?v=PhggNGsSQyg&t=0s
* https://www.robinwieruch.de/redux-observable-rxjs/

### Go too far
* https://redux-observable.js.org/
* Bugsnag
* CircleCI performance with Lighthouse CLI https://web.dev/incorporate-performance-budgets-into-your-build-tools/

### Data Prefetching Strategies
Consider using `componentDidMount` instead of `getInitialProps`, see https://medium.com/@diamondgfx/nextjs-lessons-learned-part-2-f1781237cf5c.




## Server Development

### Express server for more advanced routing
https://medium.com/@diamondgfx/nextjs-lessons-learned-part-2-f1781237cf5c

### Setup Security Layer
* SSL with [LetsEncrypt](https://letsencrypt.org/)
* cron certbot renew ([doc](https://certbot.eff.org/docs/using.html#renewing-certificates))
* Allow disabling 443 initially when setting up, even with prod build.
* Pass domain name as env variable

### GraphQL
* Set up a storage solution (https://www.apollographql.com/docs/apollo-server/v1/ / https://softchris.github.io/pages/graphql-express.html / https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1)
* Use [Apollo](https://www.apollographql.com/docs/react/) for queries
* See [this tutorial](https://blog.apollographql.com/whats-next-js-for-apollo-e4dfe835d070) for Apollo and Next.js integration

#### Tooling for GraphQL

* https://github.com/marketplace/graphql-inspector




## Design Tooling

* https://www.figma.com/resources/extensions-and-apis/storybook-figma-addon/
* Storybook components OR InVision Design System Manager OR Pattern Lab OR UXPin OR Fractal
* react-sketchapp components (then into Figma)


## CI/CD

### Manage Environments Better
* [dotenv](https://medium.com/@diamondgfx/nextjs-lessons-learned-part-3-be3aeefd9be0)

### Testing
* [Tutorial on file structure](https://medium.com/@diamondgfx/nextjs-lessons-learned-part-3-be3aeefd9be0)
* Choose a test engine
* Write tests, ugh.

### Code Coverage
* [Codecov](https://github.com/marketplace/codecov/plan/MDIyOk1hcmtldHBsYWNlTGlzdGluZ1BsYW4xNg==#pricing-and-setup)
* [Codacy](https://github.com/marketplace/codacy)

### Cleaner Server Update
* Dockerize runtime environments
* Use a load balancer with [sticky sessions](https://stackoverflow.com/questions/10494431/sticky-and-non-sticky-sessions) to dispatch to the right container
* Clean up old containers without sessions
