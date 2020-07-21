//https://www.codewars.com/kata/5a092d9e46d843b9db000064

//an array with matching positive and negative numbers
//find the element without any match

//input = array
//output = number

//exmaple
//[1, -1, 2, -2, 3] = 3

const arr = [1, -1, 2, -2, 3];

for (let num of arr) {
  if (arr.indexOf(num * -1) === -1) console.log(num);
}

function solve(arr) {
  //find if array does NOT include oppposite number
  return arr.find((num) => !arr.includes(-num));
}
