
const Employee = require("../lib/Employee");

test("Can recogonize new Employee" , () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Name can be created", () => {
    const name = "Guy";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("ID can be created", () => {
    const id = 100;
    const employee = new Employee("Foo", id);
    expect(employee.id).toBe(id);
});

test("Email can be created", () => {
    const email = "guy@guycorp.com";

    const employee = new Employee("Foo", 1, email);
    expect(employee.email).toBe(email);
});

test("getName is returning name", () =>{
    const name = "Guy";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("getId is returning id", () => {
    const id = 100;
    const employee = new Employee("Guy", id); // <= need to fill in the proceding arguments
    expect(employee.getId()).toBe(id);
});

test("getEmail is returning email", () => {
    const email = "guy@guycorp.com";

    const employee = new Employee("Guy", 100, email);
    expect(employee.getEmail()).toBe(email);
});

test("getRole is returning Employee", () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe("Employee");
});
