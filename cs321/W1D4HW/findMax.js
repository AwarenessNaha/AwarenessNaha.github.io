/**
 * Algorithm findMax(L) 
p:=L.first()
return findMaxHelper(L, p) 

Algorithm findMaxHelper(L, p) 
If(!L.after(p)) then
return L.elements(p)
else
return Math.max( L.elements(p),  findMaxHelper(L, L.after(p)) )
 */

function findMax(L) {
    let p = L.first()
    return findMaxHelper(L, p)
}

function findMaxHelper(L, p) {
    if (!L.after(p)) {
        return L.elements(p);
    } else {
        return Math.max(L.elements(p), findMaxHelper(L, L.after(p)));
    }
}