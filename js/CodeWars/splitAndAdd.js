//https://www.codewars.com/users/yish/completed_solutions

let arr =  [1, 2, 3, 4, 5];



let mid = Math.floor(arr.length / 2), 
    left = [],
    right = arr.slice(mid);


if(arr.length % 2){
    left.push(0, ...arr.slice(0, mid));
} else {
    left = arr.slice(0, mid);
}

    

// arr = left.map((num, i) => num + (right[i] || 0));


function splitAndAdd(arr, n){
    if(n <= 0) return arr;

    let mid = Math.floor(arr.length / 2),
        left = [],
        right = arr.slice(mid);

    if (arr.length % 2) {
        left.push(0, ...arr.slice(0, mid));
    } else {
        left = arr.slice(0, mid);
    }
    
    arr = left.map((num, i) => num + right[i]);
    
    return splitAndAdd(arr, n - 1);
}