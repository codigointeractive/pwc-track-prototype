# PwC Track Prototype

Frameworks:
- Bootstrap
- Font Awesome
- Isotope.js

## Quick Start

```shell
git clone https://github.com/codigointeractive/pwc-track-prototype.git
cd style-guide
npm install
npm run dev # Point browser to: http://localhost:8080
```

## Available Commands

```shell
npm run build  # Minimized build in dist/
npm run dev    # Dev server running at: http://localhost:8080
npm run lint   # eslint
npm run clean  # clean dist/
npm run test   # currently not used
npm run start  # start production server at ./dist/server.js
```

## How it runs in production

The `server.js` file is a simple `node.js` with [koa middleware](https://github.com/koajs/koa) app that that serves the `index.html` file in a production environment.
Everything needed to run the production environment is in the `/dist` directory which is generated using `npm run dev` or `npm run build` commands.

All that's required to serve the production version of the project is a basic http server.  As such, you can also globally install the [http-server](https://github.com/indexzero/http-server) npm package
and run it from the dist folder like so:

```shell
# do only once
npm install -g http-server
# from project root
npm run build
cd dist/
http-server
```

Now navigate to `localhost:8080` in your web browser.

## Directory Structure
The below explanation doesn't cover all the files but highlights some of them with comments about usage

```
Client Rroject Root
│   Dockerfile               # not currently used for development, only devops deployment
│   index.html               # webpack uses `html-webpack-plugin` with this template to create /dist/index.html
|   .eslint.rc               # webpack uses this `preloader` task to run eslint on every file change `{ test: /\.js?/, exclude: __dirname + '/node_modules', loaders: ['eslint'] }`
|   server.js                # copied into `/dist` to be used with `npm run start` task to serve the styleguide in production
|   webpack.config.babel.js  # contains all webpack config which includes: copying files, minimizing / obfuscating, preloaders / loaders, etc
│
└───app
│   │
│   └───styleguide-core
│   |   │   # Generic structure and  needed to make the styleguide function
|   |
|   └───styleguide-src
│       │   # Everything specific to a given project or client
│
└───dist # not in source control, the ourput of the webpack build
    │   font files      # from font-awesome, custom fonts, etc
    |   <some guid>.svg # webpack created rollup of images in `styleguide-src`
    |   index.html      # webpack uses `html-webpack-plugin` with this template to create /dist/index.html
    |   server.js       # copied from project root to be used with `npm run start` task to serve the styleguide in production
    |   vendors.js      # all sources from `dependencies` section in `package.json`
    │   # todo: wait for reply from david for clarity on other files
```

There is currently a dependency on some colors defined in the `styleguide-src` in the `styleguide-core`.  This should be removed or documented better

## Feature requests and open issues
Please look at the [issues page](/../issues)

We should try to keep these tagged correctly
