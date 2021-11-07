const User = require("./user.js");

const alice = new User(1, 'Alice');

test("ID is correct", () => {
    expect(alice.id).toBe(1);
});

test("Username is correct", () => {
    expect(alice.name).toBe("Alice");
});
  