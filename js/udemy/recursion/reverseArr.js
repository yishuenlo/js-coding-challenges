//https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1440/

//must modify the input array in-place, with O(1) extra memory
//input: array
//output: array

let arr = ["h", "e", "l", "l", "o"];


//["o","l","l","e","h"]

let result = [];


function reverseString(arr){
    let count = 1;

    function reverse(arr){
        //establish recursion base
        if (count > arr.length) return arr;

        //grab second letter and unshift to the front
        arr.unshift(...arr.splice(count, 1));
        count++;
        return reverse(arr);
    }

    reverse(arr);
    
    return arr;
}

let count = 0;

function reverse(arr) {
    //establish recursion base
    if (count >= Math.floor(arr.length / 2)) return arr;

    //swap first and last letters
    let temp = arr[count];
    arr[count] = arr[arr.length - 1 - count];
    arr[arr.length - 1 - count] = temp;

    count++;
    return reverse(arr);
}

// reverse(arr);




// let count = 1;

// while(count <= arr.length){
//     arr.unshift(...arr.splice(count, 1));
//     count++;
// }

// reverseString(arr);