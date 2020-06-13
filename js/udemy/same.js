// [1,2,3] , [4, 1, 9]  true
//[1,2,3], [1, 9] false

let arr1 = [1, 2, 3];
let arr2 = [4, 1, 9];

// let obj = {};

// for(let num of arr1){
//     obj[num**2] = ++obj[num**2] || 1;
// }

// arr1.sort((a,b) => a - b);
// arr2.sort((a,b) => a - b);

// arr1.every(function(element, index){
//     return element ** 2 === arr2[index];
// })

//O(n)
function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    return arr1.every(function (element, index) {
        return element ** 2 === arr2[index];
    });
}