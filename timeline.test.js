const User = require("./user.js");
const Muttering = require("./muttering.js");
const Timeline = require("./timeline.js")

const timeline = new Timeline([
    new Muttering(1, new User(1, 'Alice'), 'I love the weather today.')
]);

test("Timeline has one muttering", () => {
    expect(timeline.mutterings.length).toBe(1);
});
