/**
 * Algorithm sum(L)								//O(1)
r:=0 										//O(1)
return 	sumHelper(L, r)						//O(n)
-------------------------------------
Algorithm sumHelper(L, r)						//O(n)
if r >L.size()  then 							//O(1)
Return  0									//O(1)
else 
return L.atRank(r).elements() +sumHelper(L, r+1)	//O(n)
 */
function sum(L) {
    r = 0;
    return sumHelper(L, r);
}

function sumHelper(L, r) {
    if (r > L.size()) {
        return 0;
    } else {
        return L.atRank(r).elements() + sumHelper(L, r + 1);
    }
}