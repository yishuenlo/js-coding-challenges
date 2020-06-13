//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/530/week-3/3306/

//solution
//https://dev.to/akhilpokle/leftmost-column-with-at-least-a-one-a-common-algorithm-question-thought-process-from-brute-force-to-binary-search-4mi8

//youtube solution
//https://www.youtube.com/watch?v=AS3Hcla3Hm0

let matrix = [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1]
];

var leftMostColumnWithOne = function (binaryMatrix) {
    //grab dimensions from binaryMatrix
    let grid = binaryMatrix.dimensions();

    //assign rows & columns based on grid dimension
    let rows = grid[0];
    let columns = grid[1];

    //if no rows and columns, exit function 
    if (rows == 0 || columns == 0) return -1;

    //start from top right corner
    let result = -1;
    let row = 0;
    let col = columns - 1;

    //as long as there are enough rows and columns are greater than 0
    //traverse down or left to find 1
    while (row < rows && col >= 0) {
        if (binaryMatrix.get(row, col) == 1) {
            result = col; //assign column value to result
            col--; //move left to next value
        } else {
            //if value is 0
            row++; //move down to next vlaue
        }
    }

    return result;
};