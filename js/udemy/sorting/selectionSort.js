let arr = [29, 10, 14, 30, 37, 14, 18];



const swap = (arr, i1, i2) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}


let sorted = 0;

while(sorted < arr.length){
    //reset min to first unsorted element
    let min = arr[0 + sorted];

    //start looping
    for (let i = 1 + sorted; i < arr.length; i++) {
        //if number smaller than min
        if (arr[i] < min) {
            //set number to min
            min = arr[i];
            
            //swap numbers
            swap(arr, sorted, i);
        }
    }
    sorted++;
}

console.log(arr);

function selectionSort(arr){
    const swap = (arr, i1, i2) => {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }

    for (let sorted = 0; sorted < arr.length; sorted++) {
        let min = sorted;

        for (let i = sorted + 1; i < arr.length; i++) {
            //if number smaller than min
            //set index to min
            if (arr[i] < arr[min]) min = i;

            //swap numbers
            if (sorted !== min) swap(arr, sorted, min);
        }
    }    

    return arr;
}

