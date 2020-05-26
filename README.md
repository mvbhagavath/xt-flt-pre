## XT Full lifecycle taining

This project is a front-end application which would let the users help list and browse all Characters of Rick and Morty Show.

#### Tech stack used

React with hooks
Redux with Thunk middleware
SASS
Bootstrap 4
Jest with testing-library/react

#### Tools 

Webpack
eslint
stylelint

### Key Features

* Responsive in nature
* Ability to search characters by name
* Ability to sort by ID
* Capabilty to Filter characters by Species, Gender and Origin

### Quick Overview

To see this application running clone the repo and install dependencies using npm and run the start script.

```sh
npm start
```

Runs the app in development mode.<br>
Open [http://localhost:7000](http://localhost:7000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

Coverage report generated can be found under `covergae/`

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>

### `npm run lint`

Linting for both javascript and stylesheets are setup using eslint and stylelint respectively.<br>

To run lint on all files you can use the command

```sh
npm run lint
```

If you want to run list only for javascript files or css files then run 

```sh
npm run lint:js
npm run lint:css
```

To fix linting issues run

```sh
npm run lint:fix
```

The configs setup for these can be found in the config files at the root level


