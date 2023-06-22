
# Testing Festivals Web Page

# Pre-requisites to run the tests
    - Node Js
    - npm or yarn

# Commands to run the tests

    - Clone the repository from Git Hub
    - Run the festivals website (Follow the steps mentioned in "README.MD" which is in the root folder)
    - Test scripts are present in "web/cypress/e2e" this file path
    - Run any the following command to install node.js libraries that are mentioned in packages.json
            - npm install
            - yarn install
    - Run any of the following commands to excute the tests in headless mode
        - npx cypress run
        - yarn cypress run
    - Run any of the following commands to excute the tests in headed mode. 
        - npx cypress run --headed  --browser <<browser name>>
            - ex: npx cypress run --headed  --browser chrome
        - yarn cypress run --headed  --browser <<browser name>>
            - ex: yarn cypress run --headed  --browser chrome
