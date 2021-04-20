"use strick";

/**
 * This program is to find learning bugs if there are some.It is natural law that you want to learn
    * something, you must be able to learn.In the Bible "seek and you will find ", it means that if I am  
    *  * seeking for understanding JS, I should find the understanding.STC: When knowing occurs, there are * knower and the known.Why knowing and knower are here, but missing the known.Here must be a bug, 
 * a learning bug.Finding the bug is the purpose of this program.* /
/**
 * @author Naha who is the awareness itself. 
 * @Date writen on April 4, 2021
 */

const prompt = require("prompt-sync")(); // My IDE does not support this at this moment. 

const bugsDB = [{
    id: 1, name: "current sibling concept", def: " Didn't understand the sibling concept in the same lesson, cause the uneasiness of understanding ", advise: "Go through all of the topics be carefully in current lesson, the slices, textbook"
},

{
    id: 2, name: "Past or fundamental", def: "absence of some fundamental concept",
    advise: "walk backward to find the missing part and fill it.Get help from your instructor would be a good idea."
},

{
    id: 3, name: "Bug in professor",
    def: "This happens when the professor is trying to teach something he or she doesn't understand it well. The signs are:a) the professor could not explain the topic in another way when students ask for;b) use the same or similar example code repeatedly to explain the concept,c) most students in class couldn't learn via the teaching", advise: "Let the prof. know there is a bug in his or her side, so that the bug can be fixed and the program runs.The prof.is closer to the point of understanding and has more resource to use for fixing the bug"
},

{
    id: 4, name: "hardware problem", def: "unclear mind, the brain is not supporting learning.",
    advise: "Get rest via sleep or meditation or relax."
}
];

function findLearningBugs() {
    const bugfound = [];
    const finderIuput1 = prompt("Do you understand well other part of current lesson? Answer yes or no", "no");
    if (finderIuput1 === "no") {
        bugfound.push(bugsDB[0]);
    }
    const finderInput2 = prompt("Are there any fundamental concepts that you have understood well? Answer yes or no", "yes");
    if (finderInput2 === "yes") {
        bugfound.push(bugsDB[1]);
    }
    const finderInput3 = prompt("Whether you see any signs of a bug in your professor? Answer yes or no", "no");
    if (finderInput3 === "yes") {
        bugfound.push(bugsDB[2]);
    }
    const finderInput4 = prompt("Does your hardware support your learning at this moment", "yes");
    if (finderInput4 === "yes") {
        bugfound.push(bugsDB[3]);
    }
    return bugfound;
}

console.log(findLearningBugs());

for (const item of bugfound) {

    for (const [key, value] of Object.entries(item)) {
        console.log(`${key}: ${value}`);
    }
}
