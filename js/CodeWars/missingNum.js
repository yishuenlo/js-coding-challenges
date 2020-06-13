//https://www.codewars.com/kata/5276c18121e20900c0000235

let arr = [1, 2, 3, 5];
arr = arr.sort((a,b) => a - b);

let low = 0;
let high = arr.length - 1;
let mid = 0;


while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (mid + 1 == arr[mid]) {
        //missing number is on the right
        low = mid + 1;
    } else {
        //missing number is on the left
        high = mid - 1;
    }
}

if(mid+1 != arr[mid]){
    console.log(mid + 1);
} else {
    console.log(mid + 2);
}



// for(let i = 0; i <= arr.length + 1; i++){
//    if (i + 1 !== arr[i]){
//      console.log(i + 1);
//      break;
//    }
// }

function findNumber(arr) {
    arr = arr.sort((a, b) => a - b);

    let low = 0;
    let high = arr.length - 1;
    let mid = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (mid + 1 == arr[mid]) {
            //missing number is on the right
            low = mid + 1;
        } else {
            //missing number is on the left
            high = mid - 1;
        }
    }

    if (mid + 1 != arr[mid]) {
        return (mid + 1);
    } else {
        return (mid + 2);
    }
}

function findNumber1(arr) {
    arr = arr.sort((a, b) => a - b);

    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor((low + high) / 2);

    if (arr[0] !== 1){
        return 1;
    } else if (low + 1 == arr[low] && high + 1 == arr[high]){
        return high + 2;
    } else {
        while (low < high) {
            mid = Math.floor((low + high) / 2);

            if (mid + 1 === arr[mid]) {
                //missing number is on the right
                low = mid + 1;
            } else {
                //missing number is on the left
                high = mid - 1;
            }
        }

        return mid + 1;
    }
}