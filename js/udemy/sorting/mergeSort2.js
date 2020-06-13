//merge sort
//divide array into 1 element
//recursively compare array and merge back

function mergeSort(arr) {
    //establish base
    if (arr.length <= 1) return arr;

    //divide array into left and right segments
    let mid = Math.floor(arr.length / 2);

    //continue to divide array into 1 or less elements
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    //once array is broken up into small pieces
    //merge them back up
    return merge(left, right);
}


//create helper functiont to merge arrays
function merge(arrA, arrB) {
    //create empty array container to hold sorted elements
    let result = [];

    let a = 0; //for tracking arrayA
    let b = 0; //for tracking arrayB

    while (a < arrA.length && b < arrB.length) {
        //if arrA[a] is smaller, add to result
        //increment a to track next element
        if (arrA[a] < arrB[b]) {
            result.push(arrA[a]);
            a++;
        } else {
            result.push(arrB[b]);
            b++;
        }
    }

    //if a/b doesn't reach all the way to the end
    if (a < arrA.length) result = result.concat(arrA.slice(a));
    if (b < arrB.length) result = result.concat(arrB.slice(b));

    return result;
}