const fs = require('fs');

function writeHTML (employeeCards) {

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
</div>`;

function generateCard(employees) {
    for (employee of employees) {
        switch (employee.getRole()) {
            case 'Manager':
                employee.card = cardTemplate.replace('%NAME%', `Name: ${employee.name}`).replace('%ROLE%', `☕ ${employee.getRole()}`)
                .replace('%ID%', `ID: ${employee.id}`).replace('%EMAIL%', `Email: ${employee.email}`).replace('%OTHER%', `Office Number: ${employee.getON()}`);
                break;
            case 'Engineer':
                employee.card = cardTemplate.replace('%NAME%', `Name: ${employee.name}`).replace('%ROLE%', `☕ ${employee.getRole()}`)
                .replace('%ID%', `ID: ${employee.id}`).replace('%EMAIL%', `Email: ${employee.email}`).replace('%OTHER%', `Github: ${employee.getGithub()}`);
                break;
            case 'Intern':
                employee.card = cardTemplate.replace('%NAME%', `Name: ${employee.name}`).replace('%ROLE%', `☕ ${employee.getRole()}`)
                .replace('%ID%', `ID: ${employee.id}`).replace('%EMAIL%', `Email: ${employee.email}`).replace('%OTHER%', `School ${employee.getSchool()}`)
                break;
        }
    }
}

module.exports = {generateCard}