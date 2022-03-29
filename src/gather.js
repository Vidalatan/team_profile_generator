const inquirer = require('inquirer');
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

async function gatherName(role) {
    while (true) {
        response = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: `What is the team ${role}'s name?`
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
        if (!Number.isNaN(parseInt(response.id))&&response.id !== "") {
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
        if (!Number.isNaN(parseInt(response.office))&&response.id !== "") {
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

async function gatherSchool() {
    while(true) {
        response = await inquirer.prompt({
            type: 'input',
            name: 'school',
            message: `What school is the team member attending?`
        })
        if (response.name !== '') {
            return response.school
        } else {
            console.log('Please enter a valid school name before continuing...');
        }
    }
}

async function gatherManager() {
    const manager = new Manager(await gatherName('Manager'), await gatherEmployeeId(), await gatherEmail(), await gatherON())
    return manager
}

async function gatherEngineers() {
    let engineers = []
    while (true) {
        engineers.push(new Engineer(await gatherName('Engineer'), await gatherEmployeeId(), await gatherEmail(), await gatherGithub()))
        let response = await inquirer.prompt({
            type: 'confirm',
            name: 'cont',
            message: 'Do you have any other engineers to enter?'
        })
        if (!response.cont) {
            return engineers
        }
    }
}

async function gatherInterns() {
    let interns = []
    while (true) {
        interns.push(new Intern(await gatherName('Intern'), await gatherEmployeeId(), await gatherEmail(), await gatherSchool()))
        let response = await inquirer.prompt({
            type: 'confirm',
            name: 'cont',
            message: 'Do you have any other interns to enter?'
        })
        if (!response.cont) {
            return interns
        }
    }
}

module.exports = {gatherManager, gatherEngineers, gatherInterns}