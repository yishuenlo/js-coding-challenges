//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/531/week-4/3313/

var FirstUnique = function (nums) {
    this.nums = nums;

    //create hash to track repeated numbers
    this.obj = {};
    this.nums.forEach(x => this.obj[x] = this.obj[x] + 1 || 1);

    return null;
};

FirstUnique.prototype.showFirstUnique = function () {
    //get rid of repeated numbers in array
    //keep array size small, free of clutter
    while (this.nums.length > 0 && this.obj[this.nums[0]] > 1) this.nums.shift();

    //return value in array
    if(this.nums.length == 0){
        return -1;
    } else {
        return this.nums[0];
    }
};

FirstUnique.prototype.add = function (value) {
    //populate hash to track repeated elements
    if(this.obj[value]){
        this.obj[value] += 1;
    } else {
        //add to hash and array
        this.obj[value] = 1;
        this.nums.push(value);
    }
    return null;
};

firstUnique = new FirstUnique([7,7,7,7,6]);




let arr = [233, 11, 233];
let obj = {};
arr.forEach(x => obj[x] = obj[x] + 1 || 1);

while (arr.length > 0 && obj[arr[0]] > 1) arr.shift();

// for(let key in obj){
//     if(obj[key] === 1){
//         console.log(key);
//         break;
//     }
// }

// let map = new Map();
// arr.forEach(function(num){
//     if(map.size == 0 && !map.has(num)){
//         map.set(num, 1);
//     }
// })

// console.log(map);

// for(let key of map){
//     if (key[1].value === 1) console.log(key[0]);
// }
