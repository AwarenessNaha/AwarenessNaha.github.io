const Tab = require('./LookupTable.js');
const Dict = require('./HT_Dictionary.js');

const Util = require('./GenCopyFunctions.js');
const VoterFns = require('./HW12_VotingHelpers.js')

let HelperFunctions = new Util.GenCopyFunctions();
let VotingHelpers = new VoterFns.VotingHelpers();

function testFunction(numCandidates, numVotes) {
    let arr = HelperFunctions.genArrayData(numCandidates, numVotes);
    let seq = HelperFunctions.copyArray2Seq(arr);
    // console.log(seq.toString() + "\n");
    let LTD = new Tab.LookupTable();
    let winners = VotingHelpers.findWinnersArrayUsingDict(arr, LTD);
    console.log(LTD.toString());
    console.log("LookupTable winners Array Using Dictionary =" + winners);
    console.log();
    LTD.removeAllItems();
    winners = VotingHelpers.findWinnersSeqUsingDict(seq, LTD);
    // console.log(LTD.toString());
    console.log("LookupTable winners Sequence Using Dictionary =" + winners);
    console.log();

    winners = VotingHelpers.findWinnersFromArrayUsingPQ(arr);
    console.log("Priority Queue winners Array =" + winners);
    console.log();
    winners = VotingHelpers.findWinnersFromSeqUsingPQ(seq);
    console.log("Priority Queue winners Sequence =" + winners);
    console.log();    

    let HTD = new Dict.HT_Dictionary();
    winners = VotingHelpers.findWinnersArrayUsingDict(arr, HTD);
    // console.log(HTD.toString());
    console.log("HashTable winners Array Using Dictionary =" + winners);
    console.log();
    HTD.removeAllItems();
    winners = VotingHelpers.findWinnersSeqUsingDict(seq, HTD);
    // console.log(LTD.toString());
    console.log("HashTable winners Sequence Using Dictionary =" + winners);
    console.log();
}

testFunction(100, 50);
testFunction(1000, 50);
