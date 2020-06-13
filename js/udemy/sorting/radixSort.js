let num = 123;
//12345, 0 is 5
//12345, 1 is 4

let arr = [121, 12, 1, 4, 14, 15, 12005, 1486];

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / (10 ** i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// function mostDigits(nums) {
//     return digitCount(Math.max(...nums));
// }

function radixSort(arr) {
    //find max digit count
    let max = digitCount(Math.max(...arr));

    for (let k = 0; k < max; k++) {
        //create empty bucket each digit
        let buckets = Array.from({
            length: 10
        }, () => []);

        //sort num into respective buckets
        for (let num of arr) {
            let digit = getDigit(num, k);
            buckets[digit].push(num);
        }

        //collapses all the arrays in bucket
        //update arr
        arr = buckets.flat();
    }

    return arr;
}

