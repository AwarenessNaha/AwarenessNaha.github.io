const Pair = require('./Item.js');
const PQueue = require('./PriorityQueue.js');

class VotingHelpers {

    _countElementsOfSeq(seq, D) {
        //use posistion and while loop
        // count the elements in seq and store the count for each candidate in Dictionary D
        let A = seq.first()
        D.insertItem(A.element(), 1)
        while (!seq.isLast(A)) {
            A = seq.after(A);
            let v = D.findValue(A.element())
            if (v !== null) {
                D.insertItem(A.element(), v = v + 1)
            } else {
                D.insertItem(A.element(), 1)

            }

        }

    }
    _countElementsOfArray(arr, D) {
        for (let i = 0; i < arr.length; i++) {
            let v = D.findValue(arr[i]);
            if (v === null) {
                D.insertItem(arr[i], 1);
            } else {
                D.insertItem(arr[i], v += 1);
            }
        }
    }

    _findWinnersFromDictionary(D) {
        // The count for each candidate should be in Dictionary D
        // Iterate through the Items (ID, count) and find the winners and put in the array 
        //need to use iterator for hash table
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
        let f = seq.first();
        PQ.insertItem(f, f)
        while (!seq.isLast(f)) {
            f = seq.after(f);
            PQ.insertItem(f, f)
        }
        //or use iterator to process sequence

        // let iter = seq.elements();
        // while(iter.hasNext()){
        //     let el = iter.nextObject()
        //     PQ.insertItem(el,el)
        // }
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
        let curElement = PQ.removeMin();
        let max = 0;
        let count = 1;
        let arr;

        while (!PQ.isEmpty()) {
            let next = PQ.removeMin();
            //compare current element with next element
            if (curElement === next) {
                count += 1;
            }
            //found a new winner
            if (count > max) {
                max = count;
                arr = [];
                arr.push(curElement, count);
            }
            //found more than 1 winner
            else if (count === max) {
                arr.push(curElement, count);
            }
            count = 1;
            curElement = next;
        }
        //process last element or if only one element exists
        if (count > max) {
            arr = [];
            arr.push(curElement, count);
        }
        else if (count === max) {
            arr.push(curElement, count);
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
