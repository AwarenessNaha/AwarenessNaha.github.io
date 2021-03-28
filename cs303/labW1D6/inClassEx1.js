const team = ["Shiva", "Rama", " Buda"];

const [shi, ram, bud] = team;

console.log("expect Shiva", shi);
console.log("expect Shiva", ram);

const team1 = { point: "bob", shooting: "fred", power: "jim" };
const { point, shooting, power, small, center } = team1;
console.log("expect Big Sleep", point);
console.log("expect Jim ", power);