/**
 * Algorithm CalTreeheight(T)
return CalTreeHeightHelper(T, T.root()) 
Algorithm CalTreeHeightHelper(T, p) 
if T.isExternal(p) then
return 0
else 
heightL:= 1+ CalTreeHeightHelper(T, p.leftChild())
heightR:= 1+ CalTreeHeightHelper(T, p.rightChild())
return Math.max(heightL, heightR)
 */

function CalTreeheight(T) {
    return CalTreeHeightHelper(T, T.root());// O(logn)
}
function CalTreeHeightHelper(T, p) {
    if (T.isExternal(p)) { //O(1)
        return 0; //O(1)
    } else {
        heightL = 1 + CalTreeHeightHelper(T, p.leftChild()); //O(logn)
        heightR = 1 + CalTreeHeightHelper(T, p.rightChild()); //O(logn)
        return Math.max(heightL, heightR); //O(1)
    }
}