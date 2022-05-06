const Manager = require("../lib/Manager");

test("Can crate an office number", () => {
    const officeNumber = "555-545-5555";
    const manager = new Manager("Guy", 1, "guy@guycorp.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});