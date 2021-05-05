/**
 * Algorithm countVotes(S)

S:= heapSort(S)
SCopy :=S
candidateList := deduplicate(SCopy)
votesCount:= new Array(candidateList.size())
 votes :=1
While(!S.isempty()) do
If S.first().element==S.first().after().element then
votes:=votes +1
S.remove(S.first())
else
votesCount.insertLast(votes)
votes:=1
S.remove(S.first())
maxVote:=0
maxId :=null
for i:=0 to votesCount.length do
if maxVote < votesCount[ i] then
maxVote = votesCount[ i] 
maxId:=i

candidateArray := list2Array(candidateList) //list2Array() can convert a list to array

winner :=candidateArray[maxId]

return winner
 */

function countVotes(S) {

    S = heapSort(S);
    let SCopy = S;
    let candidateList = deduplicate(SCopy);
    let votesCount = new Array(candidateList.size());
    let votes = 1;
    while (!S.isempty()) {
        if (S.first().element == S.first().after().element) {
            votes = votes + 1;
            S.remove(S.first());
        } else {
            votesCount.insertLast(votes);
            votes = 1;
            S.remove(S.first());
        }

        let maxVote = 0;
        let maxId = null;
        for (let i = 0; i < votesCount.length; i++) {
            if (maxVote < votesCount[i]) {
                maxVote <= votesCount[i];
                maxId = i;
            }

            candidateArray = list2Array(candidateList); //list2Array() can convert a list to array

            let winner = candidateArray[maxId]

            return winner;
        }
    }
}