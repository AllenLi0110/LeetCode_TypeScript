//Blog: https://allenliservice.online/leetcode-ts-766-toeplitz-matrix/

// <strong>Solution: </strong>
// 這題要能理解如何從二維陣列中取出數值來進行比對，
// 再來就是遍歷矩陣中的陣列元素，
// 如果左上與右下相同則繼續直到結束回傳 true，否則回傳 false。

// <strong>Code 1: BigO(m * n)</strong>
function isToeplitzMatrix(matrix: number[][]): boolean { 
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }
    return true;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]

matrix[i][j] 1, matrix[i - 1][j - 1] 1 // continue;
matrix[i][j] 2, matrix[i - 1][j - 1] 2 // continue;
matrix[i][j] 3, matrix[i - 1][j - 1] 3 // continue;
matrix[i][j] 5, matrix[i - 1][j - 1] 5 // continue;
matrix[i][j] 1, matrix[i - 1][j - 1] 1 // continue;
matrix[i][j] 2, matrix[i - 1][j - 1] 2 // continue;

return true;
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: matrix = [[1,2],[2,2]]

matrix[i][j] 2, matrix[i - 1][j - 1] 1 // false

return false;
</pre> */
