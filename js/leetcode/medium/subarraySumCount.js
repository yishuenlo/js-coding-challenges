//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/531/week-4/3307/

let arr = [1, 1, 1, 0, 2];
let target = 2;
//2

let hash = {0:1};
let sum = 0;
let count = 0;

//iterate through numbers
for(let num of arr){
    //add number to sum
    sum += num;

    //if (sum - target) exist in hash table
    //assign value to count
    if(hash[sum-target]) count += hash[sum-target];

    //populate hash able
    //if sum already exist in hash table, add 1;
    //if not, assign 1
    (hash[sum]) ? hash[sum] += 1 : hash[sum] = 1;
}

var subarraySum = function (arr, target) {
    let hash = {
        0: 1
    };
    let sum = 0;
    let count = 0;

    //iterate through numbers
    for (let num of arr) {
        //add number to sum
        sum += num;

        //if (sum - target) exist in hash table
        //assign value to count
        if (hash[sum - target]) count += hash[sum - target];

        //populate hash able
        //if sum already exist in hash table, add 1;
        //if not, assign 1
        (hash[sum]) ? hash[sum] += 1: hash[sum] = 1;
    }

    return count;
};