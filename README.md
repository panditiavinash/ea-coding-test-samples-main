
# Testing EA Festivals Web Page

# Pre-requisites to run the tests
    - Node.Js
    - npm or yarn

# Commands to run the tests

    - Clone the repository from Git Hub
    - Run the festivals website (Follow the steps mentioned in "./web/README.MD")
    - Test scripts are present in "web/cypress/e2e" this file path
    - Run any the following command to install node.js libraries that are mentioned in packages.json
            - npm install
            - yarn install
    - Run any of the following commands to excute the tests in headless mode
        - npx cypress run --reporter mochawesome
        - yarn cypress run --reporter mochawesome
    - Run any of the following commands to excute the tests in headed mode. 
        - npx cypress run --headed  --browser <<browser name>> --reporter mochawesome
            - ex: npx cypress run --headed  --browser chrome --reporter mochawesome
        - yarn cypress run --headed  --browser <<browser name>> --reporter mochawesome
            - ex: yarn cypress run --headed  --browser chrome --reporter mochawesome
    - In order to have a clean commands use any of the following command to execute the tests and generate html reports. For more info on these commands check the package.json-->scripts section
        - npm run test-code
        - yarn run test-code
