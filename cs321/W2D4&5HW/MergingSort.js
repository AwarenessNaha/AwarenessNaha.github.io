
function mergeSort(S) {
    let n = S.length;
    let temp = [];
    mergeSortHelper(S, 0, n - 1, temp);
}

function mergeSortHelper(S, lo, hi, temp) {
    if (hi - lo + 1 > 1) {
        let mid = Math.floor((lo + hi) / 2);
        mergeSortHelper(S, lo, mid, temp);
        mergeSortHelper(S, mid + 1, hi, temp);
        merge(S, lo, mid, hi, temp);
    }
    return;
}

function merge(A, lo, mid, hi, temp) {
    let size = hi - lo + 1;
    let t = 0;
    let j = lo;
    let k = mid - 1;
    while (j <= mid && k <= hi) {
        if (A[j] > A[k]) {
            temp[t] = A[k];
            k = k + 1;
        } else {
            temp[t] = A[j];
            j++;
        }

        t++;
    }
    while (k <= mid) {
        temp[t] = A[j];
        t = t + 1;
        k = k + 1;
    }
    while (k <= hi) {
        temp[t] = A[k];
        t = t + 1;
        k = k + 1;
    }
    for (let i = 0; i < size - 1; i++) {
        A[lo + i] = temp[i];
    }
}


function merge(A, B, S) {
    while (A.size() > 0 && B.size() > 0) {
        if (A.first().elements() > B.first().elements()) {
            S.insertLast(B.remove(B.first()));
        } else {
            S.insertLast(A.remove(A.first()));
        }
    }
    while (A.size() > 0) {
        S.insertLast(A.remove(A.first()));
    }
    while (B.size() > 0) {
        S.insertLast(b.remove(B.first()));
    }
    return S;
}