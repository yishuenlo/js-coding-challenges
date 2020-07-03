//https://www.codewars.com/kata/53573877d5493b4d6e00050c

const state_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
];

state_capitals.map(
  (location) =>
    `The capital of ${location.state || location.country} is ${
      location.capital
    }`
);

function capital1(obj) {
  let result = [];

  for (let state of state_capitals) {
    let location = Object.keys(state)[0];
    result.push(`The capital of ${state[location]} is ${state.capital}`);
  }

  return result;
}


