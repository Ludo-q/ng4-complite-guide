# Ng4 Complete Guide

## Description

> This repository is created only for education/practical porpuse. \
> This repository is created based on the online course [Angular - The Complete Guide](https://www.udemy.com/course/the-complete-guide-to-angular-2/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Internationalization

### **LOCALES**

1. Shqip{name} - sq{code} 

>_In the terminal,_\
`ng extract-i18n --output-path src/locale` - generate (update src/locale/messages.xlf): \
Copy the generated file with e new name, messages{code}.xlf:\
`cp .\src\locale\messages.xlf .\src\locale\messages.{code}.xlf`\
To support another locale.

For more info see [Angular Internationalization](https://angular.io/guide/i18n-overview)

### Notes

> In the template use <ng-container> instead of a ternary operator.


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
