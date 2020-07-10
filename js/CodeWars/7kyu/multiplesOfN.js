//https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript

//input = number
//output = array

function multiples(m, n) {
  let result = [];

  for (let i = 1; i <= m; i++) {
    result.push(i * n);
  }

  return result;
}
