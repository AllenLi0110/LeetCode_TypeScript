//Blog: https://allenliservice.online/leetcode-ts-2639-find-the-width-of-columns-of-a-grid/

// <strong>Solution: </strong>
// 這題可以把陣列排程圖像的方式來斯考：
// <pre style='background-color:#ggg'>
// Input: grid = 
//                row ->
//               [
//                [1],
//         col |  [22],
//             V  [333]
//               ]
// </pre>
// 接著我們就遍歷直欄(col)，
// 並且取出每個直欄對應的橫列(row)，
// <pre style='background-color:#ggg'>
// Input: grid = 
//                  0    1   2
//                 row ->
// row\col       [
//      0          [-15, 1,  3],
//      1   col |  [15,  7, 12],
//      2       V  [5,   6, -2]
//               ]
// </pre>
// 也就是說 col 固定，row 從上到下掃描找出最大的數值轉字串的長度，
// 最後放到 ans 陣列中即可。

// <strong>Code 1: BigO(m x n)</strong>
function findColumnWidth(grid: number[][]): number[] {
    const rows: number = grid.length;
    const cols: number = grid[0].length;
    const ans: number[] = [];

    for (let col = 0; col < cols; col++) {
        let maxWidth: number = 0;

        for (let row = 0; row < rows; row++) {
            let value: number = grid[row][col];
            let width: number = value.toString().length;
            maxWidth = Math.max(maxWidth, width);
        }
        ans.push(maxWidth);
    }
    return ans;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: grid = [[1],[22],[333]]

col 0

row 0
value 1
maxWidth 0 width 1
maxWidth 1

row 1
value 22
maxWidth 1 width 2
maxWidth 2

row 2
value 333
maxWidth 2 width 3
maxWidth 3

return ans; // [3]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: grid = [[-15,1,3],[15,7,12],[5,6,-2]]

col 0

row 0
value -15
maxWidth 0 width 3
maxWidth 3
row 1

value 15
maxWidth 3 width 2
maxWidth 3
row 2

value 5
maxWidth 3 width 1
maxWidth 3

col 1

row 0
value 1
maxWidth 0 width 1
maxWidth 1

row 1
value 7
maxWidth 1 width 1
maxWidth 1

row 2
value 6
maxWidth 1 width 1
maxWidth 1

col 2

row 0
value 3
maxWidth 0 width 1
maxWidth 1

row 1
value 12
maxWidth 1 width 2
maxWidth 2

row 2
value -2
maxWidth 2 width 2
maxWidth 2

return ans; // [3,1,2]
</pre> */
