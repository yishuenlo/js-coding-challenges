//given an array of strings, capitalize the first letter of each string

//input = array of strings
//output = array of strings

//example
//['car','taco','banana']  returns ['Car','Taco','Banana']

let strs = ["car", "taco", "banana"];

// strs[0] = strs[0][0].toUpperCase() + strs[0].slice(1);

function capitalizeFirst(strs, i = 0) {
  //establish base case
  if (i >= strs.length) return strs;

  //turn first letter to uppercase
  strs[i] = strs[i][0].toUpperCase() + strs[i].slice(1);
  return capitalizeFirst(strs, i + 1);
}

capitalizeFirst(strs);


