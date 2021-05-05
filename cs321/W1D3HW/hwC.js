/**
 * Algorithm sortRB(L)
nextRed:=L.first()
while nextRed !==L.last() /\ nextRed.elements()===RED do
nextRed:=L.after(nextRed)

p:=nextRed
while !L.last(p) do

If(p.elements() !=Red) then
L.swrapElement(p, nextred)
nextRed:=L.afer(nextRed)
p:= L.after(p)
 */

function sortRB(L) {
    let nextRed = L.first();
    while (!L.last(nextRed) && nextRed.elements() === "RED") {
        nextRed = L.after(nextRed);
    }
    let p = nextRed;
    while (p.elements() !== "Red") {
        L.swrapElement(p, nextred);
        nextRed = L.after(nextRed);
    }
    p = L.after(p);
}