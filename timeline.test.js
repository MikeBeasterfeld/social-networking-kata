const User = require("./user.js");
const Muttering = require("./muttering.js");
const Timeline = require("./timeline.js")

const timeline = new Timeline([
    new Muttering(1, new User(1, 'Alice'), 'I love the weather today.')
]);

test("Timeline has one muttering", () => {
    expect(timeline.mutterings.length).toBe(1);
});

test("Adding mutter to timeline increases total mutters in timeline", () => {
    timeline.add_muttering(new Muttering(2, new User(2, 'Bob'), 'Darn! We lost!'));
    expect(timeline.mutterings.length).toBe(2);
    timeline.add_muttering(new Muttering(3, new User(2, 'Bob'), 'Good game though.'));
    expect(timeline.mutterings.length).toBe(3);
});
