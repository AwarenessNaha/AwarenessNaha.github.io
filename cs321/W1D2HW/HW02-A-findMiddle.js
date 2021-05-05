const List = require('./DLinkedList.js')


/**
 * Algorithms findmiddle(L)
 * if L.isEmpty() then return null or throw an error
 * f<- L.first()
 * e<- L.last()
 * if(!(e==f)V L.after(f)==e) do
 * f <- L.after(f)
 * e <- L.before(e)
 * 
 * return e.elememt()
 */
/**
 * 
 * @param {List} L is list
 * @returns {element} the middels elemeent
 */

let findMiddle = function (L) { //O(n)
    if (L.isEmpty()) { // O(1)
        return null; // O(1)
    }
    let f = L.first(); // O(1)
    let e = L.last(); // O(1)
    while (!(f === e && L.after(f) === e)) { // O(n)
        f = L.after(f); // O(n)
        e = L.before(e); // O(n)
    }
    return e.element(); // O(1)

}


let tst0 = new List.DLinkedList();
tst0.print();
let res = findMiddle(tst0);
console.log("middle = " + res + "\n\n");
let tst1 = new List.DLinkedList();
tst1.insertFirst(5);
tst1.print();
res = findMiddle(tst1);
console.log("middle = " + res.element() + "\n\n");
let tst2 = new List.DLinkedList();
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res + "\n\n");
tst2.insertFirst(1);
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res.element() + "\n\n");
tst2.insertLast(3);
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res.element() + "\n\n");
tst2.insertAfter(tst2.before(tst2.after(tst2.first())), 2);
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res.element() + "\n\n");
tst2.remove(tst2.after(tst2.first()));
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res.element() + "\n\n");
tst2.insertFirst(0);
tst2.insertLast(4);
tst2.insertAfter(tst2.after(tst2.first()), 2);
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res.element() + "\n\n");
console.log(tst2.after(tst2.after(tst2.after(tst2.first()))).element());
console.log("first = " + tst2.first().element());
console.log("last  = " + tst2.last().element());