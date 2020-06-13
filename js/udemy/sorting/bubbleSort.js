let arr = [29, 10, 14, 30, 37, 14, 18];




// let sorted = 0;

// while (sorted < arr.length) {
//     for (let i = 0; i < arr.length - sorted; i++) {
//         //if i + 1 is smaller, swap
//         if (arr[i + 1] < arr[i]) swap(arr, i, i + 1);
//     }
//     sorted++;
// }

function bubbleSort(arr){
    let sorted = 0;
    do {
        swapped = false;
        for(let i = 0; i < arr.length - sorted; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

function bubbleSortWhileLoop(arr){
    //function to swap value based on indices
    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    }
 
    let sorted = 0;

    while(sorted < arr.length){
        let noSwaps = true;
        for (let i = 0; i < arr.length - sorted; i++) {
            //if i is greater, swap
            if (arr[i] > arr[i + 1]){ 
                swap(arr, i, i + 1);
                noSwaps = false;
            };
        }
        console.log(arr);
        sorted++;

        //break out of while loop is no swap occurred
        if(noSwaps) break;
    }

    return arr;
}

function bubbleSort2for(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps= false;
            }
        }
        if (noSwaps) break;
    }

    return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5]);
bubbleSort([29, 10, 14, 30, 37, 14, 18]);


