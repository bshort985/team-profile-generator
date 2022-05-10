// set up html template for each employee


generateTeam = team => {

const generateManager = manager => {

    return `

    <section class="card" style="width: 18rem;">
    <div class="card-header">
        <h2>${manager.getName()}</h2>
        <h2>${manager.getRole()}</h2>
    </div>
        <div>
                <ul class="list-group list-group-flush">
                    <li>ID: ${manager.getId()}</li>
                    <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li>Office number: ${manager.getOfficeNumber()}</li>
                </ul>
        </div>
</section>
    
    `;
   };

const generateEngineer = engineer => {

    return `
    
    <section class="card" style="width: 18rem;">
    <div class="card-header">
        <h2>${engineer.getName()}</h2>
        <h2>${engineer.getRole()}</h2>
    </div>
        <div>
                <ul class="list-group list-group-flush">
                    <li>ID: ${engineer.getId()}</li>
                    <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li>GitHub: ${engineer.getGitHub()}</li>
                </ul>
        </div>
</section>
    
    
    `;
};

const generateIntern = intern => {

    return `
    
    <section class="card" style="width: 18rem;">
    <div class="card-header">
        <h2>${intern.getName()}</h2>
        <h2>${intern.getRole()}</h2>
    </div>
        <div>
                <ul class="list-group list-group-flush">
                    <li>ID: ${intern.getId()}</li>
                    <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li>School: ${intern.getSchool()}</li>
                </ul>
        </div>
</section>
    
    
    `;
};

// build array to sort data into it's respected section

const html = [];

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
);

return html.join("");


};


module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your Team</title>
    <link rel="stylesheet" href="style.css">
</head>

    <body>
        <header class="header">
            <div>
                <h2>MY TEAM</h2>
            </div>
        </header>

        <main class="container">
            <div class="row">
                <div class="main-area">
                    ${generateTeam(team)}
                </div>
            </div>
        </main>
            
    </body>
</html>

    `;
};

