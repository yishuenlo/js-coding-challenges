//https://www.codewars.com/kata/596e91b48c92ceff0c00001f

//convert words to HEX value by taking the ASCII value of the first 3 characters
//if word is less than 3 character, fill it with 0
//example: "it" = #497400

//convert UTF-16 code to Hex
//"I".charCodeAt().toString(16) = 49
//"t".charCodeAt().toString(16) = 74

//input = string
//output = array of strings

//"Hello, my name is Gary and I like cheese."
//['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865']

let str = "&&&&& $$$$$ ^^^^^ @@@@@ ()()()()(";

const word2Hex = (word, index = 0) => {
  //find hex for the first 3 letters
  if (index > 2) return "";

  //convert letter to hex value, return 00 if no value
  let hex = word[index] ? word.charCodeAt(index).toString(16) : "00";

  //call recursively
  return hex + word2Hex(word, index + 1);
};

function wordsToHex(words) {
  return words
    .split(" ") //convert words to array
    .map((word) => "#" + word2Hex(word)); //convert to hex value
}
