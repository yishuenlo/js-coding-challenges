//https://www.codewars.com/kata/5841f680c5c9b092950001ae

let result = [];
let m = 2,
  n = 5;

for (let i = m; i <= n; i++) {
    result.push(i);
}


let array = Array.from({length: n - m + 1}, (v, i) => i + m);

console.log(array);