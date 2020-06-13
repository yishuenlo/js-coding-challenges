//an array of 1s and 0s, all 1s first then followed by all 0s
//count number of zeroes in an array

//input = array of 1s and 0s
//output = number

let arr = [1,1,1,1,0,0,0,0,0];
//                 -

let left = 0;
let right = arr.length - 1;


while(left <= right){
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
        console.log(arr.length - mid);
        break;
    }

    //if mid is 1, zero is on the right
    if (arr[mid] > 0) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }

}


function countZeroes(arr){
    let left = 0;
    let right = arr.length - 1;

    //edge cases
    if(arr[left] === 0) return arr.length;
    if(arr[right] === 1) return 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0 && arr[mid - 1] === 1) {
            return arr.length - mid;
        }

        //if mid is 1, zero is on the right
        if (arr[mid] > 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}