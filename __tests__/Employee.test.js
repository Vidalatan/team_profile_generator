const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

const testEmployee = new Employee('John', 1, 'johndoe@email.com')

test('Tests if employee has a name', () => {
    expect(testEmployee.name).toBe('John')
});

test('Tests if employee has an id', () => {
    expect(testEmployee.id).toBe(1)
});

test('Tests if employee has email', () => {
    expect(testEmployee.email).toBe('johndoe@email.com')
})