const List = require('./DLinkedList.js');

class Stack {
    constructor() {
        this._stack = new List.DLinkedList();
    }
    /**
     * Algorithm Push(elem)
     * input: an element for inserting to an stack
     * output: no output, but insert a new element to the stack
     * call this._stack.insertFirst(elem)
     */
    push(elem) { // O(1)
        // push element into the items
        this._stack.insertFirst(elem); // O(1)
    }

    pop() { //O(1)
        if (this._stack.size() === 0) // O(1)
            return "Underflow"; // O(1)
        let p = this._stack.first(); //O(1)
        return this._stack.remove(p); //O(1)
    }
    isEmpty() { //O(1)
        // return this.isEmpty();
        return this._stack.size() === 0; // O(1)
    }
    size() { // O(1)
        return this._stack.size(); // O(1)
    }
    elements() {
        return this._stack.elements();
    }
    toString() {
        return this._stack.toString();
    }
}

let St = new Stack();
St.push("a");
St.push("b");
St.push("c");
St.push("d");
console.log(St.toString());
console.log("pop=" + St.pop());
St.push("e");
St.push("f");
St.push("g");
console.log("push e, f, and g");
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
St.push("h");
St.push("i");
St.push("j");
console.log("push h, i, and j");
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log(St.toString());
