//https://www.codewars.com/kata/609eee71109f860006c377d1

// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// (str = "zbk"), (arr = [0, 1]);
//returns "b"

//input = string and array
//output = string

let str = 'zbk';
let arr = [0, 1];

for(const i of arr){
    str = str.slice(0, i) + str.slice(i + 1);
}

console.log(str);

function lastSurvivor(str, arr){
    //loop through array for index
    for(const index of arr){
        str = str.slice(0, index) + str.slice(index + 1);
    }

    return str;
}