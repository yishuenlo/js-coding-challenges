let arr = [4, 8, 2, 1, 5, 7, 6, 3];

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function pivot(arr, start= 0, end = arr.length + 1){
    let pivot = start;

    //loop through number to find pivot index
    for (let i = start + 1; i <= end; i++) {
        //if number smaller than pivot
        if (arr[i] < arr[start]) {
            pivot++;
            swap(arr, pivot, i);
        }
    }

    swap(arr, start, pivot);

    return pivot;
}

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        //find pivot
        let pivotIndex = pivot(arr, left, right);

        //recursively call left side
        quickSort(arr, left, pivotIndex - 1);

        //recursively call right side
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;    
}