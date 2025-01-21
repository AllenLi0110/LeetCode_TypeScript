//Blog: https://www.allenliservice.online/leetcode-js-338-counting-bits/

// <strong>Solution:</strong>
// 1. 建立 ans 陣列為[0]。
// 2. 執行 i = n 的迴圈，每一輪 ans 的陣列 i 位置皆為 ans[Math.floor(i / 2)] + i % 2 的和。
// <pre style='background-color:#ggg'>
//  -------------
//  0000
//  8421
//  -------------
//
//  0    0000    0
//  -------------
//  1    0001    1
//  -------------
//  2    0010    1
//  3    0011    2
//  -------------
//  4    0100    1
//  5    0101    2
//  6    0110    2
//  7    0111    3
// -------------
//  8    1000    1
//  9    1001    2
// 10   1010    2
// 11   1011    3
// 12   1100    2
// 13   1101    3
// 14   1110    3
// 15   1111    4
// </pre>
//  3. 回傳 ans。

// <strong>Code 1:</strongc>
var countBits = function (n) {
  if (n === 0) return [0];
  let ans = [0];

  for (let i = 0; i <= n; i++) {
    ans[i] = ans[Math.floor(i / 2)] + (i % 2);
  }
  return ans;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: n = 2

ans[0] = ans[Math.floor(0 / 2)] + 0 % 2 => [ 0 ]
ans[1] = ans[Math.floor(1 / 2)] + 1 % 2 => [ 0, 1 ]
ans[2] = ans[Math.floor(2 / 2)] + 2 % 2 => [ 0, 1, 1 ]

return ans = [ 0, 1, 1 ] */
