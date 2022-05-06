// Manger constructor with name, employee ID, email address, and office number
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
};

module.exports = Manager;
























 