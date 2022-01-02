//reverse string and retain space

let phrase = "This is an example!";

//"sihT si na !elpmaxe"

let arr = phrase.split(" ");

function reverseWord(word){
    return word.split("").reverse().join("");
}

function reverseStr(str) {
    let arr = str.split(" ");
    let result = [];

    for (word of arr) {
      result.push(reverseWord(word));
    }

    return result.join(" ");
}




