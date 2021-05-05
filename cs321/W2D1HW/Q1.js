/**
 * Algorithm FindSmallerKeys(T, k)
Input: A binary tree T containing n keys, and a key k
Output: a Sequence of keys in T that are less than or equal to key k
r:=1
return FindSmallerKeysHelper(T,k,r)

Algorithm FindSmallerKeysHelper(T,k,r)

sequence:=[ ]
size:=T.size()

if r==size then 
if key(T[r]) <=k then
sequence.insertLast( key(T[r]) )

If r*2<=size then
FindSmallerKeysHelper(T,k,r*2)
If (r*2+1)<=size then
FindSmallerKeysHelper(T,k,r*2+1)

 */

function FindSmallerKeys(T, k) {
    let r = 1;
    return FindSmallerKeysHelper(T, k, r);
}

function FindSmallerKeysHelper(T, k, r) {
    let sequence = [];
    let size = T.size();
    while (r <= size) {
        if (r === size) {
            if (T.elemAtRank(r) <= k) {
                sequence.insertLast(T.elemAtRank(r));
            }
        }
        if (r * 2 <= size) {
            FindSmallerKeysHelper(T, k, r * 2);
        }
        if ((r * 2 + 1) <= size) {
            FindSmallerKeysHelper(T, k, r * 2 + 1);
        }
    }
    return sequence;
}