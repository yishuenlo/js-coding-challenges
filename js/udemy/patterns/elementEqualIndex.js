//https://www.codewars.com/kata/5b7176768adeae9bc9000056

//returns the lowest index for which array[index] == index
//return -1 if no match

//input: array of numbers
//output: number

let arr = [0, 1, 2, 3, 4, 5, 7, 10, 15];

let left = 0;
let right = arr.length - 1;
let mid = Math.floor((left + right) / 2);

while(left < right){
    mid = Math.floor((left + right) / 2);

    (mid <= arr[mid]) ? right = mid : left = mid + 1;
}



function indexEqualsValue(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        (mid <= arr[mid]) ? right = mid : left = mid + 1;
    }

    return (arr[right] === right) ? right : -1;
}



