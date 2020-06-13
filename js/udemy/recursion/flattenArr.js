//flatten array
//input : array with various nested arrays
//output: ONE single array with all the elements

//exmaple
//flatten([1,2,3, [4, 5]]) return [1,2,3,4,5];

let arr = [1, 2, 3, [4, 5]];



function flatten(arr){
    let result = [];

    //loop through array
    for(let el of arr){
        //check to see if an element is an array with isArray
        //if it's an array, recursively flatten it
        if(Array.isArray(el)){
            result = result.concat(flatten(el));
        } else {
            result.push(el);
        }
    }

    return result;
}

// result.concat(arr[0]).concat(arr[1]).concat(arr[2]).concat(arr[3]).concat(arr[4]);