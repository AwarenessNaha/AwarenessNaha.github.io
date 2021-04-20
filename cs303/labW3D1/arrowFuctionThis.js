//"use strict";

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(
            //function(){alert(this.title + ': ' + student);
            student => console.log(this.title + ': ' + student));
    }
};
group.showList();
//error – ‘this’ is undefined (or window)
//works as expected – ‘this’ comes from lexical environment, showList method

let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"], showList() {
        this.students.forEach(function (student) {
            // Error: Cannot read property 'title' of undefined 
            console.log(this.title + ': ' + student)
        });
    }
};

group1.showList();