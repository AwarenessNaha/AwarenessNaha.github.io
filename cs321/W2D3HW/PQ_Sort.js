
function PQ_sort(S, C) {
    let newPQ = new PriorityQueue(40, Pair.compareItems);
    while (S.size() > 0) {
        let item1 = S.remove(S.first());
        newPQ.insertItem(item1.index, item1.elem);
    }
    while (newPQ.size() > 0) {
        let item2 = newPQ.removeMin();
        S.insertLast(item2);
    }
}