//https://www.codewars.com/kata/5259510fc76e59579e0009d4

let dictionary = ['zqdrhpviqslik', 'karpscdigdvucfr', 'jhjyasikwyufr'];
//'zqdrhpviqslik'
let str = "rkacypviuburk";

//track number of character changes in each word
// start with word length
// if match, length -1;

let word1 = dictionary[0];
let word2 = dictionary[1];

let count1 = {};
let count2 = {};

for (let char of word1) count1[char] = ++count1[char] || 1;
for (let char of str) {
    if(count1[char] != null) count1[char]--;
}
let countDiff1 = Object.values(count1).map(x => Math.abs(x)).reduce((a, b) => a + b);

for (let char of word2) count2[char] = ++count2[char] || 1;
for (let char of str) {
    if (count2[char] != null) count2[char]--;
}
let countDiff2 = Object.values(count2).map(x => Math.abs(x)).reduce((a, b) => a + b);

console.log(countDiff1, countDiff2);




let mostSimilar = {};

for (let word of dictionary) {
    let length = Math.max(word.length, str.length);
    for (let char of str) {
        // console.log(char);
        if (word.includes(char)) length -= 1;
    }
    mostSimilar[word] = Math.abs(length);
}

let min = Math.min(...Object.values(mostSimilar));
let corrected = Object.keys(mostSimilar).find(key => mostSimilar[key] === min);

console.log(mostSimilar);
console.log(corrected);




function autocorrect(dictionary, str) {
    let mostSimilar = {};
    for (let word of dictionary) {
        let length = Math.max(word.length, str.length);
        for (let char of str) {
            if (word.includes(char)) length -= 1;
        }
        mostSimilar[word] = Math.abs(length);
    }

    let min = Math.min(...Object.values(mostSimilar));
    let corrected = Object.keys(mostSimilar).find(key => mostSimilar[key] === min);

    return corrected;
}

function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.findMostSimilar = function(str){
    let mostSimilar = {};
    for (let word of this.words) {
        let length = Math.max(word.length, str.length);
        for (let char of str) {
            if (word.includes(char)) length -= 1;
        }
        mostSimilar[word] = Math.abs(length);
    }

    let min = Math.min(...Object.values(mostSimilar));
    let corrected = Object.keys(mostSimilar).find(key => mostSimilar[key] === min);

    return corrected;
}

