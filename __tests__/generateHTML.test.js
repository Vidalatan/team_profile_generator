const { test } = require("@jest/globals");
const Manager = require('../lib/Manager');
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const generateHTML = require('../src/generateHTML')

const testManager = new Manager('John', 0, 'johnj@email.com', 1)
const testEngineer = new Engineer('Avery', 1, 'averya@email.com', 'https://github.com/averya')
const testIntern = new Intern('Jessica', 2, 'jessicaj@email.com', 'SMU')

// put one of each through the generateCard method
generateHTML.generateCard([testManager, testEngineer, testIntern])

const expectedManager = 
`<div class="card shadow mx-3 p-0" style="width: 18rem;">
    <div class="card-body bg-danger">
        <h5 class="card-title">Name: John</h5>
        <h6 class="card-title">☕ Manager</h6>
    </div>
    <ul class="list-group list-group-flush p-3 bg-secondary">
        <li class="list-group-item">ID: 0</li>
        <li class="list-group-item">Email: johnj@email.com</li>
        <li class="list-group-item">Office Number: 1</li>
    </ul>
</div>`;

const expectedEngineer = 
`<div class="card shadow mx-3 p-0" style="width: 18rem;">
    <div class="card-body bg-danger">
        <h5 class="card-title">Name: Avery</h5>
        <h6 class="card-title">🔧 Engineer</h6>
    </div>
    <ul class="list-group list-group-flush p-3 bg-secondary">
        <li class="list-group-item">ID: 1</li>
        <li class="list-group-item">Email: averya@email.com</li>
        <li class="list-group-item">Github: https://github.com/averya</li>
    </ul>
</div>`;

const expectedIntern = 
`<div class="card shadow mx-3 p-0" style="width: 18rem;">
    <div class="card-body bg-danger">
        <h5 class="card-title">Name: Jessica</h5>
        <h6 class="card-title">🏫 Intern</h6>
    </div>
    <ul class="list-group list-group-flush p-3 bg-secondary">
        <li class="list-group-item">ID: 2</li>
        <li class="list-group-item">Email: jessicaj@email.com</li>
        <li class="list-group-item">School: SMU</li>
    </ul>
</div>`;

test('Test if card is added to the manager class through genHTML function', () => {
    expect(testManager.card).toBe(expectedManager)
})

test('Test if card is added to the engineer class through genHTML function', () => {
    expect(testEngineer.card).toBe(expectedEngineer)
})

test('Test if card is added to the intern class through genHTML function', () => {
    expect(testIntern.card).toBe(expectedIntern)
})