/**
 * Algorithm removeDuplicateHelper(L, p)
q :=L.after()
while !L.isLast(q) do
if p.elements()==q.elements() then
q:=L.before(q)
L.remove(L.after(q) )
if ! L.isLast(q) then
q := L.after(q)

Algorithm removeDuplicate(L)
p:= L.first()
while !L.isLast() do
removeDuplicateHelper(L, p)
if !L.isLast(p) then 
p := L.after(p) 

 */

function removeDuplicateHelper(L, p) {
    let q = L.after(p);
    while (!L.isLast(q)) {
        if (p.elements() === q.elements()) {
            L.remove(L.before(q));
        }
    }
}

function removeDuplicate(L) {
    let p = L.first()
    while (!L.isLast()) {
        removeDuplicateHelper(L, p)
        if (!L.isLast(p)) {
            p = L.after(p)
        }
    }
}