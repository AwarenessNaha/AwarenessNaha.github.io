

function pickPivot(L) {
    let p = L.atRank(Math.floor(L.size() / 2));
    return p;
}

function partition(S) {
    let newS = [];
    let L = newS[0] = [];
    let E = newS[1] = [];
    let G = newS[2] = [];
    let p = pickPivot(S);
    let x = p.elements();
    while (S.size() > 0) {
        let y = S.remove(S.first());
        if (y < x) {
            L.insertLast(y);
        } else if (y > x) {
            G.insertLast(y);
        } else {
            E.insertLast(y);
        }
    }
    return newS;
}

function QuickSort(S) {
    if (S.size() > 1) {
        let newS = partition(S);
        newS[0] = QuickSort(newS[0]);
        newS[1] = QuickSort(newS[1]);
        newS[2] = QuickSort(newS[2]);
    }
    return newS;
}

