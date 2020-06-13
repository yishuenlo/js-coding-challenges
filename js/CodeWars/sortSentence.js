//https://www.codewars.com/kata/52dffa05467ee54b93000712
//https://www.codewars.com/kata/52dffa05467ee54b93000712/solutions/javascript

// let str =
//   "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!";

let str =
  "I, habitan of the Alleghanies, treating of him as he is in himself in his own rights";

//"as habitan he him himself his in in is of of own rights the treating I Alleghanies"

let arr = str.split(/\W+/).filter((x) => x);
// arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());
// arr.filter((word) => word[0].charCodeAt() >= 97);

let lowerCase = arr.filter((word) => word[0].charCodeAt() >= 97).sort();

let upperCase = arr
  .filter((word) => word[0].charCodeAt() < 97)
  .sort()
  .reverse();

function sort(str) {
  let arr = str.split(/\W+/).filter((x) => x);

  let lowerCase = arr.filter((word) => word[0].charCodeAt() >= 97).sort();

  let upperCase = arr
    .filter((word) => word[0].charCodeAt() < 97)
    .sort()
    .reverse();

  return lowerCase.concat(upperCase).join(" ");
}
