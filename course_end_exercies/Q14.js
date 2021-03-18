/**
 * 14. Given a list of words and two words word1 and word2, return the shortest distance
 *  between these two words in the list.
#shortest_word_distance
Assume the words ["practice", "makes", "perfect", "coding", "makes]
Input                                      Output
word1 = "coding", word2 = "practice"         3
word1 = "makes", word2= "coding"             1
Note: You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
 */

function shortestWordDistance(words, word1, word2) {
    const index1 = words.indexOf(word1);
    const index2 = words.indexOf(word2);
    return Math.abs(index1 - index2);
}

//console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes], "coding","practice")); 

//console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes], "makes", "coding")); 

console.log(shortestWordDistance(["a", "b", "c", "d", "e", "f"], "a", "d"));
console.log(shortestWordDistance(["a", "b", "c", "d", "e", "f"], "a", "f"));
