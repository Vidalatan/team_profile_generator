const { test } = require("@jest/globals");
const Manager = require('../lib/Manager');
const generateHTML = require('../src/generateHTML')

const testManager = new Manager('John', 0, 'johnj@email.com', 1)

generateHTML.generateCard([testManager])

const expected = 
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


test('Test if card is added to the manager class through genHTML function', () => {
    expect(testManager.card).toBe(expected)
})