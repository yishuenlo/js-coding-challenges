//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/529/week-2/3292/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.arr = [];
};


MinStack.prototype.push = function (x) {
    this.arr.push(x);
    return this.arr;
};


MinStack.prototype.pop = function () {
    this.arr.pop();
};


MinStack.prototype.top = function () {
    return this.arr[this.arr.length-1];
};


MinStack.prototype.getMin = function () {
    return Math.min(...this.arr);
};

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);

//["MinStack","push","push","push","getMin","top","pop","getMin"]
// [[],[-2],[0],[-1],[],[],[],[]]