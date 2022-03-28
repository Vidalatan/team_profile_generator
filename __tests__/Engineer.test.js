const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

const testEngineer = new Engineer('Monica', 3, 'monicam@email.com', 'https://github.com/monicam')

test('Tests if Engineer has a name', () => {
    expect(testEngineer.getName()).toBe('Monica')
});

test('Tests if Engineer has an id', () => {
    expect(testEngineer.getId()).toBe(3)
});

test('Tests if Engineer has email', () => {
    expect(testEngineer.getEmail()).toBe('monicam@email.com')
})

test('Tests if Engineer has github', () => {
    expect(testEngineer.getGithub()).toBe('https://github.com/monicam')
})

test('Tests if role is "Engineer"', () => {
    expect(testEngineer.getRole()).toBe('Engineer')
})