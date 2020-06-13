let arr = [1,1,1,1,2];

// let i = 0;
// let j = 1;

// while(j < arr.length){
//     if (arr[i] === arr[j]) {
//         j++;
//     } else {
//         i++;
//         arr[i] = arr[j];
//     }
// }

function countUnique(arr){
    if(arr.length < 1) return 0;
    let i = 0;

    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

