//https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

//input = string, array
//output = string

let str = "abracadabra"; //'abRacaDabRA'
const arr = [2, 6, 9, 10];
let index = 2;


const capitalize = (str, arr) => {
  str = str.split(''); //convert to array

  for(let i of arr){
    if(str[i]) str[i] = str[i].toUpperCase();
  }

  return str.join('');
};



const capitalize2 = (str, arr) => {
  for (let index of arr) {
      str =
        str.slice(0, index) +
        str.charAt(index).toUpperCase() +
        str.slice(index + 1);
  }

  return str;
};
