const inquirer = require('inquirer');

async function gatherName() {
    while (true) {
        response = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: `What is the team member's name?`
        })
        if (response.name !== '') {
            return response.name
        } else {
            console.log('Please enter a valid name before continuing');
        }
    }
}

async function gatherEmail() {
    while(true) {
        response = await inquirer.prompt({
            type: 'input',
            name: 'email',
            message: `What is the team member's email?`
        })
        if (response.email.includes('@') && response.email.includes('.com')) {
            return response.email
        } else {
            console.log('Invalid Email. Please try again');
        }
    }
}

async function gatherEmployeeId() {
    while(true) {
        response = await inquirer.prompt({
            type: 'input',
            name: 'id',
            message: `What is the team member's Employee Id? (Should only contain numbers)`
        })
        if (Number.isNaN(parseInt(response.id))) {
            return response.id
        } else {
            console.log('Invalid Employee Id. Should only contain numbers');
        }
    }
}

async function gatherON() {
    while(true) {
        response = await inquirer.prompt({
            type: 'input',
            name: 'office',
            message: `What is the manager's office number? (Should only contain numbers)`
        })
        if (Number.isNaN(parseInt(response.office))) {
            return response.office
        } else {
            console.log('Invalid Office Number. Should only contain numbers');
        }
    }
}

async function gatherGithub() {
    while(true) {
        response = await inquirer.prompt({
            type: 'input',
            name: 'github',
            message: `What is the team member's github username?`
        })
        if (response.name !== '') {
            return response.github
        } else {
            console.log('Please enter a valid github username before continuing...');
        }
    }
}

module.exports = {gatherName, gatherEmail, gatherEmployeeId, gatherON, gatherGithub}