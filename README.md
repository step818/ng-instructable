# _How-To you do_

#### _10th Independent project, 06/15/2019_

#### By _**Stephen Trewick**_

## Program Name _How-To you do_ 10th Independent Project

## Description

This exercise is designed to be a hub for DIY and "How-to" projects uploaded by users and searchable for other patrons to view. Using Angular CLI, this is practice in setting up ng, routing to nested components, sending data down with inputs, passing actions up with EventEmitters, and filtering data with pipes. The page will have a section for uploading projects, where a series of forms will be filled out until the overall form is submitted in to a database. Users will be able to search for relevant projects on how to do or make a project and the respective "how-to's" will display their title. Then a user can click the title to get to the details of the step-by-step instructable.

### Specs

| Spec | Input | Output |
| :-----------------    | :------------------ | :-------------- |
| Returns a list of doctors by issue. | _Input:_ "Physical Therapy" | _Output:_ A list of doctors in the area that specialize or take clients based on physical therapy  |
| Returns a list of doctors by name | _Input:_ "Rodriguez" | _Output:_ A list of doctors who have the name Rodriguez |
| Returns error if the input has no matches | _Input:_ "0" | _Output:_ "No doctors match your search input" |
| When a list is returned, information about each doctor will be included. | _Input:_ "Sleep problems" | _Output:_ Doctor name, address, phone number, website, and availability |

## Setup/Installation Requirements

* _You can check out the repository link in my github pages [Link to repository](https://github.com/step818/)_

#### Install, build and run the application
1. Navigate to the application root directory:

       $ cd DoctorLookup
2. Install the required packages:

       $ npm install
3. Build the application:

       $ npm run build
4. Run the application:

       $ npm run start

#### Test the application
1. Execute the tests with Jasmine and Karma:

       $ npm run test


## Support and contact details

_stephent818@gmail.com_

## Support and contact details

If you have any feedback or concerns, please contact Stephen Trewick.

## Technologies Used

_Windows 10.1, Visual Studio Code _

### License
*Licensed under the GPL License*
Copyright (c) 2019 **_Stephen Trewick_**



# HowTo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

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
