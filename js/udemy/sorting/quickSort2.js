let arr = [4, 8, 2, 1, 5, 3, 1];

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function findPivot(arr, start = 0, end = arr.length){
    let pivot = start;

    for(let i = start + 1; i < end; i++){
        if(arr[i] < arr[start]){
            pivot++;
            swap(arr, pivot, i);
        }
    }

    swap(arr, start, pivot);

    return pivot;
}

function quickSort(arr, left = 0, right = arr.length){
    if(left < right){
        //pivot = mid point of array
        let pivot = findPivot(arr, left, right);

        //conintue to slice up left side by replacing right with pivot
        quickSort(arr, left, pivot - 1);

        //continue to slice up right side by replacing left with pivot
        quickSort(arr, pivot + 1, right)
    }

    return arr;
}