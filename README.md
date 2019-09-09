# Trello Tests


## Installation
### Prerequisites 
[NodeJS](https://nodejs.org/en/download/package-manager/) and [Java](https://www.java.com/en/download/)
### Instructions
Download the project
`$ git clone https://github.com/facundoc/trello-test.git`

Navigate to the folder
`$ cd trello-test `

Install dependencies
`$ npm install`



## Running the tests

In order to run the all the tests execute any of the command in the terminal

**All Tests:**

`npm test`

**API Tests**

`npm run test:api`

**UI Tests**

`npm run test:ui`


## Structure of the tests

The folder `nw` contains the scripts, page objects and logs for the tests written using NightwatchJS
The folder `api` contains the scripts for the tests written using Supertest and ran with Mocha
The folder `utils` contains :

 - data.js file with the test data consumed by the scripts (both api and ui) 
 - helper.js that contains the helper functions with API calls for creating boards, lists and deleting cards that are used in the pre and post hooks in  both scripts.

 
