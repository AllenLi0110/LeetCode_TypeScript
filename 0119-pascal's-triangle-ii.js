//Blog: https://www.allenliservice.online/leetcode-js-119-pascals-triangle-ii/

// <strong>Solution:</strong>
// 1. 如果 rowIndex === 0，則回傳 [1]。
// 2. 如果 rowIndex === 1，則回傳 [1,1]。
// 3. 宣告 array = [1]
// 4. 執行題目要求的第 i 行，為執行 i 次的 for 迴圈。
// 5. 宣告 previous 為當前陣列 i 的前一個位置數值。(array[i - 1]
// 6. 執行題目要求的第 i - 1 行，為執行 j 次的 for 迴圈。
// 7. 宣告 current 為 array[j]，如不存在則返回 0。
// 8. 變更 array[j] 更新為上一行的數值總和。
// 9. 將 previous 變更為當前的數值，進入輪 j 迴圈。
// 10. 運用array.push(1)來完成陣列最後一個值為 1。
// 11 回傳 array。
// <pre style='background-color:#ggg'>
// i = V
// previous = O
// current = #
//                 #
// array-2th =  [1,1]  ->j
// array-3th = [1,1,1] ->i
//              O V
// </pre>

// <strong>Code 1:</strong>
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  let array = [1];

  for (let i = 1; i <= rowIndex; i++) {
    let previous = array[i - 1];

    for (let j = 1; j < i; j++) {
      let current = array[j] ? array[j] : 0;

      array[j] = previous + current;
      previous = current;
    }
    array.push(1);
  }
  return array;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: rowIndex = 3
let array = [1]

step.1
i = 1, j = 1
previous = array[1-1] = array[0] = 1

array.push(1) = [1] => [1,1]

step.2
i = 2, j = 1
previous = array[2-1] = array[1] = 1

step.2-1
i = 2, j = 1
current = array[1] ? array[1] : 0 => 1 //array[1] = 1
array[1] = previous + current = 1 + 1 //2
previous = current //1

array.push(1) = [1] => [1,2,1]

step.3
i = 3, j = 1
previous = array[3-1] = array[2] = 1

step.3-1
i = 3, j = 1
current = array[1] ? array[1] : 0 => 2 //array[1] = 2
array[1] = previous + current = 1 + 2 //3
previous = current //1

step.3-2
i = 3, j = 2(j < 3)
current = array[2] ? array[2] : 0 => 2 //array[2] = 2
array[2] = previous + current = 1 + 2 //3
previous = current //1
array.push(1) = [1] => [1,3,3,1]

return array //[1,3,3,1]
</pre> */

// <strong>Code 2:</strong>
var getRow = function (rowIndex) {
  let ans = new Array(rowIndex + 1);

  ans[0] = ans[rowIndex] = 1;
  for (i = 1, up = rowIndex; i < rowIndex; i++, up--)
    ans[i] = (ans[i - 1] * up) / i;
  return ans;
};
