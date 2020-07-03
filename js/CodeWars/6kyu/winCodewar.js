//https://www.codewars.com/kata/5e3f043faf934e0024a941d7

//accept two arrays, compare numbers within each array and the one with larger number 'wins'. Array with most wins wins the war
//if two number equal, it is a stalemate

//input = two arrays of equal length
//ouput = string (victory, stalemate, defeat)

//victory
// const codewarrior = [2, 4, 3, 1]; //1, 2, 3, 4
// const opponent = [4, 5, 1, 2]; //1, 2, 4, 5

//victory
const codewarrior = [5, 4, 22, 16, 15];
const opponent = [22, 22, 14, 20, 15];

//stalemate
// const codewarrior = [1, 4, 1];
// const opponent = [1, 5, 3];

//victory
// const codewarrior = [5, 2, 1, 6, 1];
// const opponent = [5, 4, 5, 2, 1];

//victory
// const codewarrior = [19,1,16,16,13];
// const opponent = [19,17,13,15,20];

//stalemate
// const codewarrior = [4,2,7,9,10];
// const opponent = [10,10,1,6,17];

let battle = 0;
// win = +1, lose = -1, stalemate = 0

codewarrior.sort((a, b) => a - b);
opponent.sort((a, b) => a - b);

console.log("codewarrior", codewarrior);
console.log("opponent", opponent);
console.log("battle", battle);

let i = 0;
//if smallest smaller than opponent, get rid of largest opponent
//definite lost
while (i < codewarrior.length) {
  if (
    codewarrior[0] < opponent[0] ||
    codewarrior[codewarrior.length - 1] < opponent[opponent.length - 1]
  ) {
    codewarrior.shift();
    opponent.pop();
    battle--;
  }
  i++;
}

console.log("codewarrior", codewarrior);
console.log("opponent", opponent);
console.log("battle", battle);

let codewarriorMid = codewarrior[Math.floor(codewarrior.length / 2)];
let opponentMid = opponent[Math.floor(codewarrior.length / 2)];

let codewarriorTotal = codewarrior ? codewarrior.reduce((a, b) => a + b) : 0;
let opponentTotal = opponent ? opponent.reduce((a, b) => a + b) : 0 ;


if (codewarriorMid < opponentMid && codewarriorTotal <= opponentTotal) {
    console.log('more opponents')
  //definite wins
  let m = codewarrior.length - 1,
    n = codewarrior.length - 1;
  while (n >= 0) {
    if (codewarrior[m] > opponent[n]) {
      codewarrior.splice(m, 1);
      opponent.splice(n, 1);
      m--;
      battle++;
    }
    n--;
  }
} 

for (let k = 0; k < codewarrior.length; k++) {
  if (codewarrior[k] > opponent[k]) {
    battle++;
  } else if (codewarrior[k] < opponent[k]) {
    battle--;
  }
}

console.log("codewarrior", codewarrior);
console.log("opponent", opponent);
console.log("battle", battle);




function codewarResult(codewarrior, opponent) {
  let battle = 0; // win = +1, lose = -1, stalemate = 0

  //sort by ascending order
  codewarrior.sort((a, b) => a - b);
  opponent.sort((a, b) => a - b);

  //while smallest is smaller or equal to opponent's smallest
  //and largest is smaller than opponent's largest
  //go for their largest number
  while (
    codewarrior[0] <= opponent[0] &&
    codewarrior[codewarrior.length - 1] < opponent[opponent.length - 1]
  ) {
    opponent.pop();
    codewarrior.shift();
    battle -= 1;
  }

  //pitch rest of number against each other once smallest is LARGER than opponent's smallest
  for (let i = 0; i < codewarrior.length; i++) {
    if (codewarrior[i] > opponent[i]) battle += 1;
  }

  //if battle > 0 return 'Victory'
  //if battle < 0 return 'Defeat'
  //if battle === 0 return 'Stalemate'
  if (battle > 0) {
    return "Victory";
  } else if (battle < 0) {
    return "Defeat";
  } else {
    return "Stalemate";
  }
}
