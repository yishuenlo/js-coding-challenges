//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

let str = " ";

//if a char follows a non-word, change it to uppercase

//remove non words
// str.replace(/\W/g, "");

// let regex = /\W+/g;

let tag = str.split(/\W+/g).filter(item => item).map(function (word) {
    if (/[a-z]/.test(word[0])) {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    } else {
        return word;
    }
}).join('');

if (tag.length > 140 || !tag) console.log(false);

console.log(tag);

function generateHashtag(str) {
    //clean up tag
    let tag = str
        .split(/\W+/g) //get rid of non characters
        .map( word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(''); //join into string 

    return (tag.length >= 140 || !tag)? false : `#${tag}`;
}