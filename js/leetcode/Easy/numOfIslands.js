 //https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/530/week-3/3302/

//https://www.geeksforgeeks.org/find-number-of-islands/


//Javascript Solutions
//https://leetcode.com/problems/number-of-islands/discuss/246207/javascript-es6-simple-dfs

//https://medium.com/@adriennetran/island-count-ccc1509e8f34

//https://codereview.stackexchange.com/questions/221403/number-of-islands

 let grid = [
     ["1", "1", "1", "1", "0"],
     ["1", "1", "0", "1", "0"],
     ["1", "1", "0", "0", "0"],
     ["0", "0", "0", "0", "0"]
 ];

var numIslands = function (grid) {
    let count = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            //if detect island, visit islands
            if(grid[i][j] === "1"){
                visitIsland(i, j, grid);

                //once entire island has been visited, add to count
                count++;
            }
        }
    }

    return count;
};

function visitIsland(i, j, grid){
    grid[i][j] = "0"; //mark island as visited

    //check for adjcent indices
    //use recursion to visit islands
    if(grid[i + 1] && grid[i + 1][j] === '1') visitIsland(i + 1, j, grid);
    if(grid[i - 1] && grid[i - 1][j] === '1') visitIsland(i - 1, j, grid);

    if(grid[i][j+1] === '1') visitIsland(i, j + 1, grid);
    if(grid[i][j-1] === '1') visitIsland(i, j - 1, grid);
}