//https://www.codewars.com/kata/5ce399e0047a45001c853c2b

// ls = [0, 1, 3, 6, 10]; 20
// ls = [1, 3, 6, 10]; 20
// ls = [3, 6, 10]; 19
// ls = [6, 10]; 16
// ls = [10]; 10
// ls = []; 0

//return [20, 20, 19, 16, 10, 0];

const ls = [0, 1, 3, 6, 10];

const sums = ls.reduce((arr, el, index) => {
  arr.push(ls.slice(index).reduce((a, b) => a + b));
  return arr;
}, []);

console.log("sums", sums);

function partsSums(ls) {
  if (ls.length === 0) return [0];
  const sums = ls.reduce((arr, el, index) => {
    arr.push(ls.slice(index).reduce((a, b) => a + b));
    return arr;
  }, []);
  sums.push(0);
  return sums;
}
