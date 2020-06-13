//find longest substring with all distinct characters

//input = string
//output = number

//rithmschool returns 7

// let str = "bbb";
let str = "longestsubstring"; //8

let i = 0;
let max = 0;

let obj = {};

for (let j = 0; j < str.length; j++) {
  let char = str[j];
  if (obj[char]) {
    i = Math.max(i, obj[char]);
  } 

  max = Math.max(max, j - i + 1);
  obj[char] = j + 1;
}

console.log(max);

function findLongestSubstring(str) {
  let i = 0;
  let max = 0;

  let obj = {};

  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    if (obj[char]) {
      i = Math.max(i, obj[char]);
    }

    max = Math.max(max, j - i + 1);
    obj[char] = j + 1;
  }

  return max;
}
