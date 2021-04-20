class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age
    }
}
class Patient extends Person {
    constructor(fname, lname, age, address) {
        super(fname, lname, age);
        this.address = address;
    }
}
class Doctor extends Person {
    constructor(fname, lname, age, branch) {
        super(fname, lname, age);
        this.branch = branch;
    }
}
class Surgeon extends Doctor {
    constructor(fname, lname, age, branch) {
        super(fname, lname, age);
        this.branch = branch;
    }
    doTheSurgery() {
    }
}
class Physician extends Doctor {
    constructor(fname, lname, age, branch) {
        super(fname, lname, age, branch);
        //this.branch = branch;
    }
    makeTheTreatment() {
    }
}

console.log(new Physician("Ali", "MahaYana", 37, "west point"));