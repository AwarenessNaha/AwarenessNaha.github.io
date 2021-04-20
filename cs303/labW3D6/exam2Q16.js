"use strict";
const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];

quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "b" }];

function answerComparator(ans1, ans2) {
    return ans2.qid - ans1.qid;
}

quiz.scoreArr = [];

quiz.scoreStudent = function (sid) {
    let score = 0;
    for (const student of quiz.students) {
        if (student.sid === sid) {
            student.answers = student.answers.sort(answerComparator);
            for (let i = 0; i < student.answers.length; i++) {
                if (student.answers[i].ans === this.key[i].ans) {
                    score++;
                }
            }
            student.score = score;
        }
    }
    this.scoreArr.push(score);
    return score;
}

quiz.getAverage = function () {
    let tot = 0;
    for (let student of quiz.students) {
        tot += student.score;
    }
    let avg = tot / quiz.students.length;
    return avg;
}

quiz.getAverage1 = function () {
    let tot = this.scoreArr.reduce((sum, item) => sum + item, 0);

    let avg = tot / this.scoreArr.length;
    return avg;
}

console.log("expect 1:", quiz.scoreStudent(10)); //1
console.log("expect 2:", quiz.scoreStudent(11)); //2
console.log("expect 2:", quiz.scoreStudent(12)); //2
console.log("expect 1.667:", quiz.getAverage()); //1.6666666666666667
console.log("expect 1.667:", quiz.getAverage1()); //1.6666666666666667