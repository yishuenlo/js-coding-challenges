//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/531/week-4/3311/
//codewars: https://www.codewars.com/kata/52756e5ad454534f220001ef

let text1 = "abcdaf";
let text2 = "acbcf";


let columns = text1.length;
let rows = text2.length;

// const matrix = [];
// for(let i = 0; i <= columns; i++){
//     matrix[i] = new Array(rows + 1).fill(0);
// }

const matrix = [...Array(columns + 1)].map(x => Array(rows + 1).fill(0));

// for(let col = 1; col <= columns; col++){

//     for(let row = 1; row <= rows; row++){
//         if(text1.charAt(col - 1) !== text2.charAt(row - 1)){
//             matrix[col][row] = Math.max(matrix[col-1][row], matrix[col][row-1]);
//         } else {
//             matrix[col][row] = matrix[col - 1][row - 1] + 1;
//         }
//     }
// }

// matrix[columns][rows];