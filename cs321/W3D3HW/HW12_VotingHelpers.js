const Pair = require('./Item.js');
const PQueue = require('./PriorityQueue.js');

class VotingHelpers {
    
    _countElementsOfSeq(seq, D) {
        // count the elements in seq and store the count for each candidate in Dictionary D
    }
    _countElementsOfArray(arr, D) {
        // count the elements in seq and store the count for each candidate in Dictionary D
    }

    _findWinnersFromDictionary(D) {
        // The count for each candidate should be in Dictionary D
        // Iterate through the Items (ID, count) and find the winners and put in the array 
        let iterD = D.items();
        let winners = [];
        return winners;
    }

    findWinnersSeqUsingDict(seq, D) {
        this._countElementsOfSeq(seq, D);
        // D.print();
        let winners = this._findWinnersFromDictionary(D);
        return winners;
    }
    findWinnersArrayUsingDict(arr, D) {
        this._countElementsOfArray(arr, D);
        // D.print();
        let winners = this._findWinnersFromDictionary(D);
        return winners;
    }

    _insertSeqIntoPQ(seq, PQ) {
        // insert the elements (candidate ID's) from Sequence seq into the Priority Queue PQ
        let iter = seq.elements();
        // your code goes here
    }
    _insertArrayIntoPQ(arr, PQ) {
        // insert the elements (candidate ID's) from Sequence seq into the Priority Queue PQ
    }

    _findWinnersFromPQ(PQ) {
        // Traverse the Priority Queue and determine the winners
        let winners = [];
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
