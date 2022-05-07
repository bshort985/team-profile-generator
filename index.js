// When starting the application prompt the user to enter manager information

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const inquire = require("inquirer");

// create initial function to start the app 

function initApp() {
    
    function buildManager() {
        
        inquire.prompt({

                type: "input",
                name: "name",
                message: "What is the Teram Manager's name?"
            })

            // destructure name from the prompt object
            .then(({ name }) => {
                this.manager = new Manager;
            });
    };
    
    buildManager();
    
};

initApp();
