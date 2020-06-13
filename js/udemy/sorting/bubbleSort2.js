function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr){
    let i = 0;

    //compare element with right element
    //if larger, swap
    for(let j = 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            swap(arr, i, j);
        }
    }
}

let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

let i = 0;
for(let j = 1; j < numbers.length; j++){
    if(numbers[i] > numbers[j]) swap(numbers, i, j);
    i++;
}