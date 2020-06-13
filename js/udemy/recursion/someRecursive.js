let arr = [1, 2, 3, 4];

const isOdd = x => (x % 2) ? true : false;

function someRecursive(arr, fn){
    //if looped to end of array and not found 'true'
    if (arr.length < 1) return false;

    //break out of recursion if found 'true'
    if(fn(arr[0])) return true;

    //loop through rest of arr
    return someRecursive(arr.slice(1), fn);
}