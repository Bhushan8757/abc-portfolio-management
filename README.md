# AbcPortfolioManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Application creation steps

open terminal run `ng new abc-portfolio-management --create-application false --strict`
`--create-application false` will create an empty workspace
`--strict` will adjust the values of some Typescript compiler flags to nudge us to do the right things
`cd abc-portfolio-management` to enter in project structure.

use `application` flag to create application workspace
`ng g application portfolio-management-app --prefix abc-pm --style scss --routing`

## Application tools

Added `prettier` it's enables us to get CONSISTENTLY formatted code. run `npm i -D prettier` and then create `.prettierrc` file.
After that add `tslint` which is provided by the angular cli, to do that we can install `npm i -D tslint-config-prettier` and add it as a last item in the "extends": [] array field of the root tslint.json file.

Update package.json file with below command:
`"format:write": "prettier projects/**/*.{ts,json,md,scss} --write", "format:test": "prettier projects/**/*.{ts,json,md,scss} --list-different",`

Add `Webpack Bundle Analyzer` tool which will help to debugging correct structure and hence architecture of our application.
run `npm i -D webpack-bundle-analyzer` and update package.json file with `"analyze": "ng build --prod --stats-json && webpack-bundle-analyzer ./dist/my-epic-app/stats-es2015.json"`

## Project Architecture

## Our project will use 2 main part to run application.

1] Eager part: That will start with main.ts and will contain the AppModule with top-level routes and CoreModule with basic layout and all the core singleton services which will be used throughout the whole application.

2] lazy loaded [routing]: That will be loaded as a result of user navigation to these features. The lazy modules will also import SharedModule.
