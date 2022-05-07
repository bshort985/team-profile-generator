const Intern = require("../lib/Intern");

test("Constructor can set Intern's school", () => {
    const school = "OSU Bootcamp";
    const intern = new Intern("Guy", 1, "guy@guycorp.com", school);
    expect(intern.school).toBe(school);
});

test("getSchool returns school", () => {
    const school = "OSU Bootcamp";
    const intern = new Intern("Guy", 1, "guy@guycorp.com", school);
    expect(intern.getSchool()).toBe(school);
});

test("getRole returns Intern", () => {
    const intern = new Intern;
    expect(intern.getRole()).toBe("Intern");
});