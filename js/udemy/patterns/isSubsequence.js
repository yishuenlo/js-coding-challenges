//input of two strings, check to see if the first string is a subsequence in second string
//subsequence means the letter appear in the same order, for example
// 'abc' is a subsequence of 'abdddc' 
//because 'abc' appear in the same order in second string, even though there are extra d's in the middle

//input = two strings
//output = boolean

//isSubsequence('hello', 'hello world'); //true
//isSubsequence('sing', 'sting'); // true
//isSubsequence('abc', 'acb'); //false

//use multiple pointers to solve the problem 

let stringA = 'hello';
let stringB = 'sting';

//establish indices to keep track
let a = 0;

//automatically increment b
for(let b = 0; b < stringB.length; b++){
    //only increment a is letters match
    if(stringA[a] === stringB[b]) a++;
}

//check to see if a is able to traverse to the end
(a === stringA.length) ? console.log(true) : console.log(false);

function isSubsequence(strA, strB){
    //establish indices to keep track
    let a = 0;

    //automatically increment b
    for (let b = 0; b < strB.length; b++) {
        //only increment a if letters match
        if (strA[a] === strB[b]) a++;

        //break out of function once a reaches the end
        //no need to continue incrementing b
        if(a === strA.length) return true;
    }

    return false;
}