//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/529/week-2/3298/

let num = [0, 0, 0, 1, 1, 1, 0];

let count = 0,
    max = 0,
    hash= {0: -1};

for(let i = 0; i < num.length; i++){
    //if 1 then +1, if 0 then -1
    (num[i] == 1) ? count += 1 : count -= 1;
    // console.log(count);
    console.log(count + "," + i + "," + hash[count]);

    //if value already in hash set
    if(hash[count] >= -1){
        console.log(`${max}, ${i} - ${hash[count]}`);
        //use i to find out how many have repeated already
        // i - hash[count] (last time value repeated)
        max = Math.max(max, i - hash[count]);
    } else {
        //keep tab of when value happens with index
        hash[count] = i;
    }
}

console.log(`max: ${max}`);




var findMaxLength = function (num) {
    let count = 0,
        max = 0,
        hash = {
            0: -1
        };

    for (let i = 0; i < num.length; i++) {
        //if 1 then +1, if 0 then -1
        (num[i] == 1) ? count += 1: count -= 1;

        if (hash[count]) {
            max = Math.max(max, i - hash[count]);
        } else {
            hash[count] = i;
        }
    }

    return max;
};