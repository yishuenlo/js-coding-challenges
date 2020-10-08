//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

//senior = age > 55, and handicap > 7

//input = array, [age, handicap]
// output = array

const input = [
  [18, 20],
  [45, 2],
];
// const input = [18, 20];

const output = [];

for (const member of input) {
  member[0] > 55 && member[1] > 7 ? output.push("senior") : output.push("open");
}

console.log("output", output);

function openOrSenior(data) {
  const output = [];

  for (const member of data) {
    const age = member[0];
    const handicap = member[1];

    age > 54 && handicap > 7 ? output.push("Senior") : output.push("Open");
  }

  return output;
}
