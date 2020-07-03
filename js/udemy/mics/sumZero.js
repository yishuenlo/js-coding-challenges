let arr = [-3, -2, -1, 0, 4, 5];

let lo = 0;
let hi = arr.length - 1;

function sumZero(arr){
    let lo = 0;
    let hi = arr.length - 1;

    while (lo < hi) {
        let sum = arr[lo] + arr[hi];
        if (sum === 0) {
            return [arr[lo], arr[hi]];
        } else if (sum > 0) {
            hi--;
        } else {
            lo++;
        }
    }
}




