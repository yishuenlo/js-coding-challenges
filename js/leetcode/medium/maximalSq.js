//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/531/week-4/3312/

let matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];



var maximalSquare1 = function (matrix) {
    let rows = matrix.length;
    let columns = rows ? matrix[0].length : 0;
    let max = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let left = (col === 0) ? 0 : matrix[row][col - 1];
            let up = (row === 0) ? 0 : matrix[row - 1][col];
            let prev = (row && col) ? matrix[row - 1][col - 1] : 0;

            if (matrix[row][col] == 1) {
                matrix[row][col] = Math.min(left, up, prev) + matrix[row][col] * 1;
            } else {
                matrix[row][col] = 0;
            }

            max = (max > matrix[row][col]) ? max : matrix[row][col];
        }
    }
    return max * max;
};

var maximalSquare = function (matrix) {
    let rows = matrix.length;
    let columns = rows ? matrix[0].length : 0;
    let max = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            //assign left, top or previously diagonal number
            let left = (col === 0) ? 0 : matrix[row][col - 1];
            let top = (row === 0) ? 0 : matrix[row - 1][col];
            let prev = (row && col) ? matrix[row - 1][col - 1] : 0;

            if (matrix[row][col] == 1) {
                matrix[row][col] = Math.min(left, top, prev) + matrix[row][col] * 1;
            } else {
                matrix[row][col] = 0;
            }

            max = (max > matrix[row][col]) ? max : matrix[row][col];
        }
    }
    return max * max;
};