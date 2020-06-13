//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/528/week-1/3284/

let num = 10;

// let happy = [];

let sum = function (num) {
    return num.toString().split('').map(x => x * x).reduce((a, b) => a + b);
}

let isHappy = function (num) {
    let unhappy = new Set;

    while (!unhappy.has(sum(num))) {
        if (sum(num) === 1) {
            return true;
        } else {
            num = sum(num);
            unhappy.add(num);
        }
    }

    return false;
}

function happyNumbers(x) {
    let happy = [];
    for (let i = 1; i <= x; i++) {
        if (isHappy(i)) happy.push(i);
    }

    return happy;
}





// console.log(happy);