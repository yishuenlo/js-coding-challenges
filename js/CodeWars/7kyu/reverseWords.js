//reverse string and retain space

let str = "This is an example!";

//"sihT si na !elpmaxe"

function reverseWord(word){
    //split character, reverse, and join
    return word.split("").reverse().join("");
}

function reverseStr(str) {
    //convert string into array
    let arr = str.split(" ");

    //reverse word and join into a phrase
    return arr.map(word => reverseWord(word)).join(' ');
}

// function reverseStr(str) {
//   //convert string into array
//   let arr = str.split(" ");
//   let result = [];

//   for (word of arr) {
//     result.push(reverseWord(word));
//   }

//   return result.join(" ");
// }




