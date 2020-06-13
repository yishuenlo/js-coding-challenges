function getDigit(num, i){
    return Math.floor((Math.abs(num) / 10 ** i) % 10);
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function radixSort(arr){
    //find largest number and its digit count
    let max = digitCount(Math.max(...arr));

    for(let i = 0; i < max; i++){
        //create empty arrays for each round of i
        let buckets = Array.from({
            length: 10
        }, () => []);

        //loop through numbers and find its digit
        for(let num of arr){
            let digit = getDigit(num, i);
            buckets[digit].push(num);
        }

        //collapse arrays
        arr= buckets.flat();
    }

    return arr;
}