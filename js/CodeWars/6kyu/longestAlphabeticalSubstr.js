//https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript

let str = 'asdfg'; //'abcde'

let left = 0;
let right = 1;
let substr = '';

for(let i = 0; i < str.length; i++){
    //if right letter is larger, shift window to the right
    if(str[right] >= str[i]){
        right++;
    } else {
        //if current window length is greater
        //add string to result
        if ((right - left) > substr.length){
            substr = str.slice(left, right);
        }
        
        //reset right and left
        //left is now right, right is right + 1
        left = i + 1;
        right = i + 2;
    }
}

console.log(substr);

function longest(str) {
    //edge case
    if(str.length < 2) return str;

    let left = 0;
    let right = 0;
    let max = 0; //track max length

    for (let i = 1; i < str.length; i++) {
        //if right letter is larger, shift window to the right
        if (str[i-1] <= str[i]) {
            //use right to track window length
            right++;

            //set max window length
            if(right > max){
                max = right;
                left = i - max;
            }
        } else {
            //reset window
            right = 0;
        }
    }

    return str.slice(left, max + left + 1);
}













// for (let i = 0; i < str.length - 1; i++) {
//     //if letter is larger, move right one unit
//     console.log(left, right);
//     if (str[right].charCodeAt() > str[i].charCodeAt()) {
//         right++;
//     } else {
//         //add string to result
//         result.push(str.slice(left, right));

//         //reset right and left
//         //left is now right, right is right + 1
//         left = i + 1;
//         right = i + 2;
//         console.log(left, right);
//     }

//     if (right === str.length) result.push(str.slice(left, right));
// }

// console.log(result);

