const { test } = require("@jest/globals");
const Manager = require("../lib/Manager");

const testManager = new Manager('Alvin', 2, 'alvina@email.com', 0);

test('Tests if Manager has a name', () => {
    expect(testManager.getName()).toBe('Alvin')
});

test('Tests if Manager has an id', () => {
    expect(testManager.getId()).toBe(2)
});

test('Tests if Manager has email', () => {
    expect(testManager.getEmail()).toBe('alvina@email.com')
})

test('Tests if Manager has office number', () => {
    expect(testManager.getON()).toBe(0)
})

test('Tests if role is "Manager"', () => {
    expect(testManager.getRole()).toBe('Manager')
})