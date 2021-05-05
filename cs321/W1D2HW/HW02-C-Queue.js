const List = require('./DLinkedList.js');

class Queue { //O(1)
    constructor() {
        this.items = {}; //O(1)
        this.headIndex = 0; //O(1)
        this.tailIndex = 0; //O(1)
    }
    enqueue(elem) { //O(1)
        this.items.insertFirst(elem); //O(1)
        //this.items[this.tailIndex] = item;
        //this.tailIndex++;
    }
    dequeue() { //O(1)
        if (this.items.isEmpty()) { //O(1)
            return "Underflow"; //O(1)
        }
        return this.items.remove(); //O(1)
    }
    isEmpty() { //O(1)
        return this.items.length == 0; //O(1)
    }
    size() { //O(1)
        return this.items.length; //O(1)
    }
    elements() { //O(1)
        return this._elem; //O(1)
    }
    toString() { //O(1)
        return this.items; //O(1)
    }
}

let Q = new Queue();
Q.enqueue("a");
Q.enqueue("b");
Q.enqueue("c");
Q.enqueue("d");
console.log(Q.toString());
console.log("Dequeue=" + Q.dequeue());
Q.enqueue("e");
Q.enqueue("f");
Q.enqueue("g");
console.log("Enqueue e, f, and g");
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
Q.enqueue("h");
Q.enqueue("i");
Q.enqueue("j");
console.log("Enqueue h, i, and j");
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log(Q.toString());
