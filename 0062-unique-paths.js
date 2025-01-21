//Blog: https://www.allenliservice.online/leetcode-js-62-unique-paths/

// <strong>Solution:</strong>
// 1. 宣告存放數值的陣列。(ex. [[0, 0, 0],[0, 0, 0]]
// 2. 放入 i 跟 j 代表起點格子，直到終點 m 跟 n。
// <pre style='background-color:#ggg'>
// +------+    +------+
// | 1, 1 | => | m, n |
// +------+    +------+
// </pre>
// 3. 預設起點步數符合為 1。
// 4. 不符，則從終點依序 temp[i - 1][j] 與 temp[i][j - 1] 回到起點。
// 5. 將過程中的符合 m 與 n 的範圍進行加總。

// <strong>Code.1: Method of exhaustion 窮舉</strong>
var uniquePaths = function (m, n) {
  const searchPath = (m, n, row, column) => {
    if (row === m && column === n) return 1;
    if (row > m || column > n) return 0;

    return (
      searchPath(m, n, row, column + 1) + searchPath(m, n, row + 1, column)
    );
  };

  return searchPath(m, n, 1, 1);
};

/* section.1 
m = 3, n = 2 => m x 2 = 3 x 2 grid

一Start一
+------+------+
| 1, 1 | 1, 2 |
+------+------+
| 2, 1 | 2, 2 | 
+------+------+
| 3, 1 | 3, 2 |
+------+------+
        一End一

section.2 
m = 3, n = 2, r = row, c = column

                      (r, c)
        |-------------(1, 1)-----------------|
  |---(1, 2)---|                   |------(2, 1)------|
(1, 3)   |---(2, 2)---|     |---(2, 2)---|      |---(3, 1)---|
   0   (2, 3)      (3, 2) (2, 3)       (3, 2) (3, 2)       (4, 1)
          0           1      0            1      1            0

每一次的路徑選擇分為「右邊 + 1」或「左邊 + 1」，
當 row > m(3) 時為 0，而 column > n(2) 時為 0，
且剛好 row === m，與 column === n」的時候，回傳 1，
最後加總所有的 1。 */

// <strong>Code.2: Method of Recursion and Hashmap 遞迴和散列圖</strong>
var uniquePaths = function (m, n) {
  let temp = {};

  const searchPath = function (m, n, temp) {
    if (m === 1 || n === 1) return 1;
    temp[`${m}-${n}`] = searchPath(m - 1, n, temp) + searchPath(m, n - 1, temp);
    console.log(temp);
    return temp[`${m}-${n}`];
  };
  return searchPath(m, n, temp);
};

/* section.1 
m = 3, n = 2 => m x 2 = 3 x 2 grid

一End一
+------+------+
| 1, 1 | 1, 2 |
+------+------+
| 2, 1 | 2, 2 | 
+------+------+
| 3, 1 | 3, 2 |
+------+------+
       一Start一

section.2 
m = 3, n = 2, r = row, c = column
                                 (m, 2)
                   |-------------(3, 2)-------------------|
         |------(2, 2)------|                   |------(3, 1)---|
  |---(1, 2)---|     |---(2, 1)---|      |---(2, 1)---|      (3, 0)
(0, 2)      (1, 1) (1, 1)      (2, 0)  (1, 1)      (2, 0)       0
   0           1      1           0       1           0
*/

//<strong>Code.3: Method of Dynamic Programming 動態規劃</strong>
var uniquePaths = function (m, n) {
  let temp = new Array(m + 1).fill(1).map((x) => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 && j === 1) {
        temp[i][j] = 1;
      } else {
        temp[i][j] = temp[i - 1][j] + temp[i][j - 1];
      }
    }
    console.log(temp);
  }
  return temp[m][n];
};

/* < strong > FlowChart:</strong>
<strong>Example 1: Method of Dynamic Programming 動態規劃</strong>
<pre style='background-color:#ggg'>
Input: m = 3, n = 7       -m: 0~3
------------------------+
temp = [[ 0, 0, 0, 0,   |      0
          0, 0, 0, 0 ], |
        [ 0, 0, 0, 0,   |      1
          0, 0, 0, 0 ], |
        [ 0, 0, 0, 0,   |      2
          0, 0, 0, 0 ], |
        [ 0, 0, 0, 0,   |      3
          0, 0, 0, 0 ]] |
------------------------+
-n: 0~7 ( 0, 1, 2, 3,
          4, 5, 6, 7 )

step.1
i = 1, j = 1
Array[1][1] = 1
              :         
temp = [[ 0, 1, 0, 0,     -m:  1   
          0, 0, 0, 0 ], 
              :

i = 1, j = 2
Array[1][2] = Array[0][2] + Array[1][1] => 0 + 1 = 1
              :         
temp = [[ 0, 1, 1, 0,     -m:  1   
          0, 0, 0, 0 ], 
              :

i = 1, j = 3
Array[1][3] = Array[0][3] + Array[1][2] => 0 + 1 = 1
              :         
temp = [[ 0, 1, 1, 1,     -m:  1   
          0, 0, 0, 0 ], 
              :

i = 1, j = 4
Array[1][4] = Array[0][4] + Array[1][3] => 0 + 1 = 1
              :         
temp = [[ 0, 1, 1, 1,     -m:  1   
          1, 0, 0, 0 ], 
              :

i = 1, j = 5
Array[1][5] = Array[0][5] + Array[1][4] => 0 + 1 = 1
              :         
temp = [[ 0, 1, 1, 1,     -m:  1   
          1, 1, 0, 0 ], 
              :

i = 1, j = 6
Array[1][6] = Array[0][6] + Array[1][5] => 0 + 1 = 1
              :         
temp = [[ 0, 1, 1, 1,     -m:  1   
          1, 1, 1, 0 ], 
              :

i = 1, j = 7
Array[1][7] = Array[0][7] + Array[1][6] => 0 + 1 = 1
              :         
temp = [[ 0, 1, 1, 1,     -m:  1   
          1, 1, 1, 1 ], 
              :
round.1
------------------------+
temp = [[ 0, 0, 0, 0,   |      
          0, 0, 0, 0 ], |
        [ 0, 1, 1, 1,   |      
          1, 1, 1, 1 ], |
        [ 0, 0, 0, 0,   |      
          0, 0, 0, 0 ], |
        [ 0, 0, 0, 0,   |      
          0, 0, 0, 0 ]] |
------------------------+

step.2
i = 2, j = 1
Array[2][1] = Array[1][1] + Array[2][0] => 1 + 0 = 1
              :         
temp = [[ 0, 1, 0, 0,     -m:  2   
          0, 0, 0, 0 ], 
              :

i = 2, j = 2
Array[2][2] = Array[1][2] + Array[2][1] => 1 + 1 = 2
              :         
temp = [[ 0, 1, 2, 0,     -m:  2   
          0, 0, 0, 0 ], 
              :

i = 2, j = 3
Array[2][3] = Array[1][3] + Array[2][2] => 1 + 2 = 3
              :         
temp = [[ 0, 1, 2, 3,     -m:  2   
          0, 0, 0, 0 ], 
              :

i = 2, j = 4
Array[2][4] = Array[1][4] + Array[2][3] => 1 + 3 = 4
              :         
temp = [[ 0, 1, 2, 3,     -m:  2
          4, 0, 0, 0 ], 
              :

i = 2, j = 5
Array[2][5] = Array[1][5] + Array[2][4] => 1 + 4 = 5
              :         
temp = [[ 0, 1, 2, 3,     -m:  2   
          4, 5, 0, 0 ], 
              :

i = 2, j = 6
Array[2][6] = Array[1][6] + Array[2][5] => 1 + 5 = 6
              :         
temp = [[ 0, 1, 2, 3,     -m:  2   
          4, 5, 6, 0 ], 
              :

i = 2, j = 7
Array[2][7] = Array[1][7] + Array[2][6] => 1 + 6 = 7
              :         
temp = [[ 0, 1, 2, 3,     -m:  2   
          4, 5, 6, 7 ], 
              :
round.2
------------------------+
temp = [[ 0, 0, 0, 0,   |      
          0, 0, 0, 0 ], |
        [ 0, 1, 1, 1,   |      
          1, 1, 1, 1 ], |
        [ 0, 1, 2, 3,   |      
          4, 5, 6, 7 ], |
        [ 0, 0, 0, 0,   |      
          0, 0, 0, 0 ]] |
------------------------+

step.3
i = 3, j = 1
Array[3][1] = Array[2][1] + Array[3][0] => 1 + 0 = 1
              :         
temp = [[ 0, 1, 0, 0,     -m:  3   
          0, 0, 0, 0 ], 
              :

i = 3, j = 2
Array[3][2] = Array[2][2] + Array[3][1] => 2 + 1 = 3
              :         
temp = [[ 0, 1, 3, 0,     -m:  3   
          0, 0, 0, 0 ], 
              :

i = 3, j = 3
Array[3][3] = Array[2][3] + Array[3][2] => 3 + 3 = 6
              :         
temp = [[ 0, 1, 3, 6,     -m:  3   
          0, 0, 0, 0 ], 
              :

i = 3, j = 4
Array[3][4] = Array[2][4] + Array[3][3] => 4 + 6 = 10
              :         
temp = [[  0, 1, 3, 6,     -m:  3   
          10, 0, 0, 0 ], 
              :

i = 3, j = 5
Array[3][5] = Array[2][5] + Array[3][4] => 5 + 10 = 15
              :         
temp = [[  0,  1, 3, 5,     -m:  3   
          10, 15, 0, 0 ], 
              :

i = 3, j = 6
Array[3][6] = Array[2][6] + Array[3][5] => 6 + 15 = 21
              :         
temp = [[  0,  1,  3, 5,     -m:  3   
          10, 15, 21, 0 ], 
              :

i = 3, j = 7
Array[3][7] = Array[2][7] + Array[3][6] => 7 + 21 = 28
              :         
temp = [[  0,  1,  3,  5,     -m:  3   
          10, 15, 21, 28 ], 
              :
round.3
----------------------------+
temp = [[  0,  0,  0,  0,   |      
           0,  0,  0,  0 ], |
        [  0,  1,  1,  1,   |      
           1,  1,  1,  1 ], |
        [  0,  1,  2,  3,   |      
           4,  5,  6,  7 ], |
        [  0,  1,  3,  5,   |      
          10, 15, 21, 28 ]] |
----------------------------+
*/
