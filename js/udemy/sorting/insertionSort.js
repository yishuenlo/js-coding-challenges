let arr = [29, 10, 14, 30, 37, 14, 18];

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        //set current number to compare
        let current = arr[i];
        
        //compare i to previous number, j
        for(let j = i - 1; j >= 0 && arr[j] > current; j--){
            arr[j] = arr[j + 1];
        }

        arr[j + 1] = current;
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4]);

let unsorted = 0;
