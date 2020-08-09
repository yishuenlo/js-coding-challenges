//https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript

//count letters repeating in a string using asterisk
//"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"

//input = string
//output = string

const city = "Chicago";

const count = city
  .replace(" ", "")
  .toLowerCase()
  .split("")
  .reduce((obj, letter) => {
    if (obj[letter]) {
      obj[letter] = obj[letter] + "*";
    } else {
      obj[letter] = "*";
    }
    return obj;
  }, {});

//option 1
//convert obj to array then to string
let result = [];
for (let key in count) {
  result.push(`${key}:${count[key]}`);
}

//option 2
//convert obj to string
let str = JSON.stringify(count).replace(/["{}]/g, "");


//option 1 function
function getStrings2(city) {
  //count letters
  const count = city
    .replace(" ", "")
    .toLowerCase()
    .split("")
    .reduce((obj, letter) => {
      if (obj[letter]) {
        obj[letter] = obj[letter] + "*";
      } else {
        obj[letter] = "*";
      }
      return obj;
    }, {});

  //store result as array
  let result = [];
  for (let key in count) {
    result.push(`${key}:${count[key]}`);
  }

  //convert array to string
  return result.join(",");
}

//option 2 function
//this option is cleaner
function getStrings(city) {
  //count letters
  const count = city
    .replace(/\s*/g, "") //remove space
    .toLowerCase() //convert all to lower case
    .split("") //conver to array
    .reduce((obj, letter) => {
      //count letters
      if (obj[letter]) {
        obj[letter] = obj[letter] + "*";
      } else {
        obj[letter] = "*";
      }
      return obj;
    }, {});

  //convert obj to string
  return JSON.stringify(count).replace(/["{}]/g, "");
}
