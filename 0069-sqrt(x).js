//Blog: https://www.allenliservice.online/leetcode-js-69-sqrtx/

// <strong>Solution:</strong>
// 1. 宣告 r 等於 x。
// 2. 當(r * r > x)時，更新 r 為(r + x / r) / 2 的整數
// 3. 回傳 r。

// <strong>Code 1:</strong>
var mySqrt = function (x) {
  let r = x;

  while (r * r > x) {
    r = Math.floor((r + x / r) / 2);
  }

  return r;
};

/* <strong>Example 1</strong>
Input: x = 4
r = x = 4

step.1 
while(4 * 4 > 4) => r = (4 + 4 / 4) / 2 => 5 / 2 = 2.5
r = Math.floor(2.5) = 2

step.2
while(2 * 2 > 4) => break

return r //2 */

// <strong>Code 2:</strong>
var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};
