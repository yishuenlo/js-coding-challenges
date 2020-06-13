//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

let arr = [0,0,1,1,1,2,2,3,3,4];

let unique = 0;

// for(let i = 1; i < arr.length; i++){

//     if(arr[i] == unique){
//         console.log(`current num: ${arr[i]}, unique: ${unique},index: ${i}`)
//         arr.splice(i, 1);
//     } else {
//         unique = arr[i];
//         console.log(`index ${i}`)
//     }
// }

// unique++;
// arr.splice(unique, arr.length - unique);

console.log(arr);

var removeDuplicates = function(nums) {
	let s = 0
	let numsLength = nums.length
	for (let f = 1; f < numsLength; f++) {
		if (nums[f] != nums[s]) {
			s++
			nums[s] = nums[f]
		}
	}
    s++
    nums.splice(s, numsLength - (s))
	return s
}