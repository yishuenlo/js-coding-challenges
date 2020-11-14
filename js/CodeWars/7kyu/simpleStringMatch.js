//https://www.codewars.com/kata/5bc052f93f43de7054000188

//compare string 1 and string 2 and see if they're the same
//* is the wildcard for any characters
//example

//solve("code*s","codewars") = true
//solve("aa*a","aaac") = false

let str1 = "aa*a"; //* = 'war'
let str2 = "aaac";

let regex;

//if string1 includes '*', split into two segments
if (str1.includes("*")) {
  [seg1, seg2] = str1.split("*");
  regex = RegExp(`^${seg1}\\w*${seg2}$`);
}

regex.test(str2);

// str2.test()

function solve(str1, str2) {
  let regex;

  //if string1 includes '*', split into two segments
  if (str1.includes("*")) {
    [seg1, seg2] = str1.split("*");
    regex = RegExp(`^${seg1}\\w*${seg2}$`);
  } else if (str1.length !== str2.length) {
    return false;
  } else {
    regex = RegExp(str1);
  }

  return regex.test(str2);
}
