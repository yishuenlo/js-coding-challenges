let word1 = 'anagram';
let word2 = 'nagaram';

let obj = {};


for(let char of word1){
    obj[char] = ++obj[char] || 1;
}

for(let char of word2){
    if (obj[char] >= 0){
        obj[char] -= 1;
    } else {
        obj[char] = 1;
    }
}

function validAnagram(word1, word2){
    //check for length
    if(word1.length !== word2.length) return false;

    //create empty object to store frequency
    let obj = {};

    //loop through first word and add to counter
    for (let char of word1) {
        obj[char] = ++obj[char] || 1;
    }

    //loop through second word and subtract from counter
    for (let char of word2) {
        //if no char or char is 0, return false
        if(!obj[char]){
            return false;

        //else increment down 1
        } else {
            obj[char] -= 1;
        }
    }

    return true;
}

function isAnagram(word1, word2){
    return word1.split('').sort().join('') === word2.split('').sort().join('');
}
