//https://leetcode.com/problems/create-target-array-in-the-given-order/

let nums = [0,1,2,3,4];
let index = [0,1,2,2,1];
let result = []; 

//[0,4,1,3,2]

// result.splice(index[0], 0, nums[0]);

for(let i = 0; i < nums.length; i++){
    result.splice(index[i], 0, nums[i]);
    //result.splice(index[0], 0, nums[0]);
}

//result.splice(index[i], 0, nums[i]);

console.log(result);

var createTargetArray = function(nums, index) {
    let result = []; 
    
    for(let i = 0; i < nums.length; i++){
        result.splice(index[i], 0, nums[i]);
    }

    return result;
};