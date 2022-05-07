const Engineer = require("../lib/Engineer");

test("Can crate a GitHub username", () => {
    const gitHub = "guy123";
    const engineer = new Engineer("Guy", 1, "guy@guycorp.com", gitHub);
    expect(engineer.gitHub).toBe(gitHub);
});

test("getGitHub returns gitHub user name", () => {
    const gitHub = "guy123";
    const engineer = new Engineer("Guy", 1, "guy@guycorp.com", gitHub);
    expect(engineer.getGitHub()).toBe(gitHub);
});

test("getRole returns engineer", () => {
    const engineer = new Engineer;
    expect(engineer.getRole()).toBe("Engineer");
});