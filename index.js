// When starting the application prompt the user to enter manager information

const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const generatePage = require("./src/page-template");

const inquire = require("inquirer");
const fs = require("fs");

const teamArray = [];

// create initial function to start the app 

function initApp() {
    
    function addManager() {

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
                message: "Provide Team Manager's 5 digit employee ID number.",
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
                    return "Please provide valid emplyoee email (must end in @guycorp.com).";
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the Team Manager's 10 digit office number?",
                validate: answer => {
                    const valid = answer.match(/^[0-9]{10,10}$/ );
                    if (valid) {
                        return true;
                    }
                    return "Please provide valid office number.";
                }
            }
            
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.empId, answers.email, answers.officeNumber);
            teamArray.push(manager);
            console.log(manager);
            buildTeam();
          });  
        };
        

    function buildTeam() {
        inquire.prompt([
            
            {
                type: "list",
                name: "empChoice",
                message: "What team memeber are you adding to the team?",
                choices: [
                    "Engineer",
                    "Intern",
                    "No new members to add."
                ]
            }
        ]).then(choice => {
            switch(choice.empChoice) {
                case "Engineer": addEngineer();
                break;
                case "Intern": addIntern();
                break;
                default: generateTeamPage();

            }
        });
    };

    function addEngineer() {

        inquire.prompt([
            
            {
                type: "input",
                name: "name",
                message: "Provide Engineer's name.",
                validate: answer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please provide Engineer's name.";
                }
            },
            {
                type: "input",
                name: "empId",
                message: "Provide Engineer's 5 digit employee ID number.",
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
                message: "What is the Engineer's email?",
                validate: answer => {
                    const valid = answer.match( /@guycorp.com$/ );
                    if (valid) {
                        return true;
                    }
                    return "Please provide valid emplyoee email (must end in @guycorp.com)";
                }
            },
            {
                type: "input",
                name: "gitHub",
                message: "Enter Engineer's GitHub user name.",
                validate: answer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please provide Engineer's GitHub username.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.empId, answers.email, answers.gitHub);
            teamArray.push(engineer);
            console.log(engineer);
            buildTeam();
          });

    };

    function addIntern() {

        inquire.prompt([
            
            {
                type: "input",
                name: "name",
                message: "Provide Intern's name.",
                validate: answer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please provide Intern's name.";
                }
            },
            {
                type: "input",
                name: "empId",
                message: "Provide Intern's 5 digit employee ID number.",
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
                message: "What is the Intern's email?",
                validate: answer => {
                    const valid = answer.match( /@guycorp.com$/ );
                    if (valid) {
                        return true;
                    }
                    return "Please provide valid emplyoee email (must end in @guycorp.com)";
                }
            },
            {
                type: "input",
                name: "school",
                message: "Enter Intern's school.",
                validate: answer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please provide Intern's school.";
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.empId, answers.email, answers.school);
            teamArray.push(intern);
            console.log(intern);
            console.log(teamArray);
            buildTeam();
          });

    }

    function generateTeamPage() {
        fs.writeFileSync("./dist/team.html", generatePage(teamArray), "utf-8");
    };

    addManager();
}

initApp()
