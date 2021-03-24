const student1 = {
    StudentId: s101,
    "quiz answers": [1, 1, 2, 4],
}

const student2 = {
    StudentId: s102,
    "quiz answers": [1, 1, 2, 4],
}

const student3 = {
    StudentId: s103,
    "quiz answers": [1, 1, 2, 4],
}

const key = [3, 1, 2, 4];

const quiz = [];

quiz.push(student1);
quiz.push(student2);
quiz.push(student3);
/**
 * 
 * @param {array} quizArray a given arr
 * @param {array} keyArray another given arr
 * @returns {object} object with scores
 */
function gradeQuiz(quizArray, keyArray) {
    const report = {};
    for (const student of quizArray) {
        const score = scoreQuiz(student.quizAnswers, keyArray);
        report[student.StudentId] = score;
    }
    return report;
}

function scoreQuiz(studentAnswers, key) {

    return 10;
}

console.log("expect {s101:3, s102:2, s103:3}", gradeQuiz(quiz, key));

