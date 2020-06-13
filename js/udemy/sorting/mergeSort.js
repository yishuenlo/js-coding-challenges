// let arr1 = [1, 10, 50];
// let arr2 = [2, 14, 99, 100];

let arr = [1, 10, 50, 2, 14, 99, 100];

function mergeSort(arr){
    //establish recursive base
    if(arr.length <= 1) return arr;

    //split array into two parts
    let mid = Math.floor(arr.length / 2);
    
    //continue to divide up the segments into 2
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(arr1, arr2){
    let result = [];

    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if ((arr1[i]) < (arr2[j])) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length) result = result.concat(arr1.slice(i));
    if (j < arr2.length) result = result.concat(arr2.slice(j));

    return result;
}
