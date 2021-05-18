const Pair = require('./Item.js');
const PQueue = require('./PriorityQueue.js');

class VotingHelpers {

    _countElementsOfSeq(seq, D) {
        // count the elements in seq and store the count for each candidate in Dictionary D
        let p = seq.first();
        D.insertItem(p.element(), 1);
        while (!seq.isLast(p)) {
            p = seq.after(p);
            let count = D.findValue(p.element());
            if (count == null) {
                D.insertItem(p.element(), 1);
            } else {
                D.insertItem(p.element(), count + 1);
            }
        }
    }
    _countElementsOfArray(arr, D) {
        // count the elements in seq and store the count for each candidate in Dictionary D
        for (let i = 0; i < arr.length; i++) {
            let vote = D.findValue(arr[i]);
            if (vote === null) {
                D.insertItem(arr[i], 1);
            } else {
                D.insertItem(arr[i], vote += 1);
            }
        }

    }

    _findWinnersFromDictionary(D) {
        // The count for each candidate should be in Dictionary D
        // Iterate through the Items (ID, count) and find the winners and put in the array 
        let iterD = D.items();
        let max = 0;
        let winners;
        while (iterD.hasNext()) {
            let item = iterD.nextObject()
            let value = item.value()
            let key = item.key()
            //more than 1 winner
            if (value === max) {
                winners.push((key))
            }
            //found a winner
            if (value > max) {
                winners = [];
                winners.push((key))
                max = value;
            }
        }
        return winners;
    }

    findWinnersSeqUsingDict(seq, D) {
        this._countElementsOfSeq(seq, D);
        D.print();
        let winners = this._findWinnersFromDictionary(D);
        return winners;

    }
    findWinnersArrayUsingDict(arr, D) {
        this._countElementsOfArray(arr, D);
        D.print();
        let winners = this._findWinnersFromDictionary(D);
        return winners;
    }

    _insertSeqIntoPQ(seq, PQ) {
        // insert the elements (candidate ID's) from Sequence seq into the Priority Queue PQ
        let iter = seq.elements();
        // your code goes here
        let iter = seq.elements();
        while (iter.hasNext()) {
            let elem = iter.nextObject();
            PQ.insertItem(elem, elem)
        }
    }
    _insertArrayIntoPQ(arr, PQ) {
        // insert the elements (candidate ID's) from Sequence seq into the Priority Queue PQ
        for (let i = 0; i < arr.length; i++) {
            let el = arr[i];
            PQ.insertItem(el, el)
        }
    }

    _findWinnersFromPQ(PQ) {
        // Traverse the Priority Queue and determine the winners
        let max = 0;
        let current = PQ.removeMin();
        let count = 1;
        while (!PQ.isEmpty()) {
            let next = PQ.removeMin();
            if (current === next) {
                count++;
            } else {
                if (count > max) {
                    let winner = [];
                    winner.push(current, count);
                } else if (count === max) {
                    winner.push((current, count));
                }
            }
        }
        return winners;
    }
    findWinnersFromSeqUsingPQ(seq) {
        let PQ = new PQueue.PriorityQueue();
        this._insertSeqIntoPQ(seq, PQ);
        return this._findWinnersFromPQ(PQ);
    }
    findWinnersFromArrayUsingPQ(arr) {
        let PQ = new PQueue.PriorityQueue();
        this._insertArrayIntoPQ(arr, PQ);
        return this._findWinnersFromPQ(PQ);
    }
}

exports.VotingHelpers = VotingHelpers;
