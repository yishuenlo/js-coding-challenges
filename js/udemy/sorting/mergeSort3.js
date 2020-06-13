//merge two sorted arrays
function merge(arrA, arrB) {
    //create empty array to hold final sorted array
    let result = [];

    //track indices in array
    let a = 0,
        b = 0;

    while(a < arrA.length && b < arrB.length){
        //add smaller number to result
        if (arrA[a] < arrB[b]) {
            result.push(arrA[a]);
            a++;
        } else {
            result.push(arrB[b]);
            b++;
        }
    }

    if(a < arrA.length) result = result.concat(arrA.slice(a));
    if(b < arrB.length) result = result.concat(arrB.slice(b));
    
    return result;
}

function mergeSort(arr) {
    //establish base case for recursion
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

let num = 168;
