//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/529/week-2/3299/
let str = "abcdefg";
str = str.split('');
let arrs = [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3]
];

let letter = "";
let result = "";

//shift left
//chop off head
// letter = str.splice(0,1);
//insert into tail
// str = str.concat(letter);



//shift right
//chopping off the tail
// letter = str.splice(str.length-2,2);
//insert tail into head
// str = letter.concat(str);

for(let arr of arrs){
    //from left shift
    if(arr[0] === 0){
        letter = str.splice(0, arr[1]);
        str = str.concat(letter);
    }

    if(arr[0] === 1){
        letter = str.splice(str.length-arr[1], arr[1]);
        str = letter.concat(str);
    }
}

console.log(str.join(''));

var stringShift = function (str, shift) {
    str = str.split('');
    let letter = "";
    for (let arr of shift) {
        //from left shift
        if (arr[0] === 0) {
            letter = str.splice(0, arr[1]);
            str = str.concat(letter);
        }

        if (arr[0] === 1) {
            letter = str.splice(str.length - arr[1], arr[1]);
            str = letter.concat(str);
        }
    }
    return str.join('');
};