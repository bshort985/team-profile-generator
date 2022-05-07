// When starting the application prompt the user to enter manager information

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const inquire = require("inquirer");


const teamArray = [];

// create initial function to start the app 

function initApp() {
    
    function buildManager() {

        // prompted to enter the team manager’s name, employee ID, email address, and office number
        
        inquire.prompt([
            
            {
                type: "input",
                name: "name",
                message: "Provide Team Manager's name.",
                validate: answer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please provide Team Managers name.";
                }
            },
            {
                type: "input",
                name: "empId",
                message: "Provide Team Manager's employee ID number.",
                validate: answer => {
                    const valid = answer.match( /^[1-9]{1,5}$/ );
                    if (valid) {
                        return true;
                    }
                    return "Please provide valid emplyoee number.";
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the Team Manager's email?",
                validate: answer => {
                    const valid = answer.match( /@guycorp.com$/ );
                    if (valid) {
                        return true;
                    }
                    return "Please provide valid emplyoee email (must in @guycorp.com)";
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the Team Manager's office number?",
                validate: answer => {
                    const valid = answer.match(/^[0-9]{10,10}$/ );
                    if (valid) {
                        return true;
                    }
                    return "Please provide valid emplyoee email (must in @guycorp.com)";
                }
            }
            
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.empId, answers.email, answers.officeNumber);
            teamArray.push(manager);
            console.log(manager);
          });   
    };
   
    buildManager();
    
}

initApp();
