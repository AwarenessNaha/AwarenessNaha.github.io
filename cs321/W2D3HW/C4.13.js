/**
 * Algorithm isSameContain (A, B)
Input: Two sequences A and B that both share one comparactor C for their elements
Output: A boolean value. True if A and B contain the same set of elements otherwise, false. 

newA := PQ_sort(A, C)
newB := PQ_sort(B, C)

For i:=0 to newA.size()-1 do
If newA[i].elements() != newB[i].elements() then
return false

return true

Algorithm PQ_sort(S, C)
Input: A sequence S, and a comparactor C for the elements of s
Output: a sequence S sorted according to C

newPQ := a new priority queue using C as comparator

while S.size() >0 do
elem1:= S.remove(S.first())
newPQ.insert(elem1)

while newPQ.size()>0 do
elem2 := newPQ.removeMin()
S.insertLast(elem2)
 */

function isSameContain(A, B) {
    let newA = PQ_sort(A, C);
    let newB = PQ_sort(B, C);

    for (let i = 0; i < newA.size() - 1; i++) {

        if (newA[i].elements() != newB[i].elements()) {

            return false;
        }
    }
    return true;
}

function PQ_sort(S, C) {
    let newPQ = {};

    while (S.size() > 0) {
        elem1 = S.remove(S.first());
        newPQ.insert(elem1);
    }

    while (newPQ.size() > 0) {
        elem2 = newPQ.removeMin();
        S.insertLast(elem2);
    }
}

function comparator(a, b) {
    return a.elements() - b.elements();
}

