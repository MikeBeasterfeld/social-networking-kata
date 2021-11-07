const User = require("./user.js");
const Muttering = require("./muttering.js");

const alice = new User(1, 'Alice');
const muttering = new Muttering(1, alice, 'I love the weather today.');

test("ID is correct", () => {
    expect(muttering.id).toBe(1);
});

test("Content is correct", () => {
    expect(muttering.content).toBe('I love the weather today.');
});

test("User property is instance of User", () => {
    expect(muttering.user).toBeInstanceOf(User);
});
