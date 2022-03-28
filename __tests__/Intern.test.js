const { test } = require("@jest/globals");
const Intern = require("../lib/Intern");

const testIntern = new Intern('Kyle', 4, 'kylek@email.com', 'SMU');

test('Tests if Intern has a name', () => {
    expect(testIntern.getName()).toBe('Kyle')
});

test('Tests if Intern has an id', () => {
    expect(testIntern.getId()).toBe(4)
});

test('Tests if Intern has email', () => {
    expect(testIntern.getEmail()).toBe('kylek@email.com')
})

test('Tests if Intern has school', () => {
    expect(testIntern.getSchool()).toBe('SMU')
})

test('Tests if role is "Intern"', () => {
    expect(testIntern.getRole()).toBe('Intern')
})