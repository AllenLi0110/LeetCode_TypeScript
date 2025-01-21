//Blog: https://www.allenliservice.online/leetcode-js-200-number-of-islands/

// <strong>solution:</strong>
// 先建立 numIslands 計算島嶼的 funciton，遍歷這個二維網陣列，
// 當碰到陸地的時候，就會依序將該土地的上下左右呼叫遞回函式 dfs 做深度搜尋，同時紀錄過的土地轉為 "0"。
// 如完成(無任何延續土地)則紀錄 result++，最後回傳 result 的數量。

// <strong>Code 1: BigO(m x n)</strong>
var numIslands = function (grid) {
  let result = 0;

  //double for loop
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      //Check the grid position = 1
      if (grid[i][j] === "1") {
        dfs(grid, i, j);
        result++;
      }
    }
  }
  return result;
};

const dfs = (grid, i, j) => {
  //Not in the grid range
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  )
    return;

  grid[i][j] = "0";

  dfs(grid, i, j - 1); //left
  dfs(grid, i, j + 1); //right
  dfs(grid, i - 1, j); //top
  dfs(grid, i + 1, j); //bottom
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

grid[0][0]
result++

return result; //1
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

grid[0][0]
result++

grid[ 2, 2 ]
result++

grid[ 3, 3 ]
result++

return result; //3
</pre>*/
