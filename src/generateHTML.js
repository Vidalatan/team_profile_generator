const fs = require('fs');

const boilerStart =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>
<body class="container-fluid">
    <header class="row py-5 mb-4 bg-primary"><h1 class="d-flex justify-content-center">My Team</h1></header>

    <main class="row d-flex justify-content-center">
`;

const boilerEnd = 
`
    </main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`

function writeHTML (employees) {
    let temp = '';

    for (employee of employees) {
        temp += employee.card
    }

    const data = `${boilerStart}+${temp}+${boilerEnd}`

    fs.writeFile('./dist/index.html', data, err => err ? console.error(err) : console.log('Success! HTML file created at ../dist/'))
}


const cardTemplate = 
`<div class="card shadow mx-3 p-0" style="width: 18rem;">
    <div class="card-body bg-danger">
        <h5 class="card-title">%NAME%</h5>
        <h6 class="card-title">%ROLE%</h6>
    </div>
    <ul class="list-group list-group-flush p-3 bg-secondary">
        <li class="list-group-item">%ID%</li>
        <li class="list-group-item">%EMAIL%</li>
        <li class="list-group-item">%OTHER%</li>
    </ul>
</div>
`;

function generateCards(employees) {
    for (employee of employees) {
        switch (employee.getRole()) {
            case 'Manager':
                employee.card = cardTemplate.replace('%NAME%', `Name: ${employee.name}`).replace('%ROLE%', `☕ ${employee.getRole()}`)
                .replace('%ID%', `ID: ${employee.id}`).replace('%EMAIL%', `Email: <a href = "mailto:${employee.email}">${employee.email}</a>`).replace('%OTHER%', `Office Number: ${employee.getON()}`);
                break;
            case 'Engineer':
                employee.card = cardTemplate.replace('%NAME%', `Name: ${employee.name}`).replace('%ROLE%', `🔧 ${employee.getRole()}`)
                .replace('%ID%', `ID: ${employee.id}`).replace('%EMAIL%', `Email: <a href = "mailto:${employee.email}">${employee.email}</a>`).replace('%OTHER%', `Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`);
                break;
            case 'Intern':
                employee.card = cardTemplate.replace('%NAME%', `Name: ${employee.name}`).replace('%ROLE%', `🏫 ${employee.getRole()}`)
                .replace('%ID%', `ID: ${employee.id}`).replace('%EMAIL%', `Email: <a href = "mailto:${employee.email}">${employee.email}</a>`).replace('%OTHER%', `School: ${employee.getSchool()}`)
                break;
        }
    }
}

module.exports = {generateCards, writeHTML}