const sum = require("./add");
test("adds 2 + 4 to equal 6", () => {
  expect(sum(2, 4)).toBe(6);
});
