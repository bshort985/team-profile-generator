// set up html template for each employee


generateTeam = team => {

const generateManager = manager => {

    return `
    
    <div>

    <h2>${manager.getName()}<h2>
    <h2>${manager.getRole()}<h2>

    <div class="card-body">
            <ul class="list-group">
                <li>ID: ${manager.getId()}</li>
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li>Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>

    <div>
    
    
    `;
};

const generateEngineer = engineer => {

    return `
    
    <div>

    <h2>${engineer.getName()}<h2>
    <h2>${engineer.getRole()}<h2>

    <div class="card-body">
            <ul class="list-group">
                <li>ID: ${engineer.getId()}</li>
                <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>

    <div>
    
    
    `;
};

const generateIntern = intern => {

    return `
    
    <div>

    <h2>${intern.getName()}<h2>
    <h2>${intern.getRole()}<h2>

    <div class="card-body">
            <ul class="list-group">
                <li>ID: ${intern.getId()}</li>
                <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li>School: ${intern.getShool()}</li>
            </ul>
        </div>

    <div>
    
    
    `;
};

// build array to sort data into itrs respected section

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
    <div>
        <h1>Your Team</h1>
    </div>

    <div>

       ${generateTeam(team)}

    <div>
        
</body>
</html>

    `;
};

