/**
 * Algorithm includes(B, p)
for i:=0 to B.size()-1 do
if B[ i ].elements() !=p.ele,ents() then
Return false
Return true
---------------------
Algorithm isPermutation(A,B)
p:=A.first()
while !(p==A.last()) do
If !includes(B, p) then 
return false
else
p:=A.after(p)

return true

 */

function includes(B, p) { //O(n)
    for (let i = 0; i < B.size(); i++) { //O(n)
        if (B[i].elements() !== p.elements()) { //O(n)
            return false; //O(1)
        }
    }
    return true; //O(1)
}

function isPermutation(A, B) { //O(n^2)
    let p = A.first(); //O(1)
    while (p !== A.last()) { //O(n)
        if (!includes(B, p)) { //O(n^2)
            return false; //O(1)
        }
    }
    return true; //O(1)
}