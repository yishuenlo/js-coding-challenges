//find pairs within an array whose difference is n

//intput = array of numbers, number
//output = boolean

let arr = [6, 1, 4, 10, 2, 4];
let n = 2;

let hash = arr.reduce((obj, num) => {
  if (obj[num] == null) obj[num] = num - n;
  return obj;
}, {});

// for(let num of arr){
//     if(hash[num])
// }

function findPair(arr, n) {
  //edge case
  if (arr.length === 0) return false;

  //count frequency
  let hash = arr.reduce((obj, num) => {
    if (obj[num] == null) obj[num] = num - n;
    return obj;
  }, {});

  //check to see if pair exist in array
  for (let num of arr) {
    if (arr.includes(hash[num])) return true;
  }

  return false;
}
