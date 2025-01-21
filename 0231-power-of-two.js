//Blog: https://www.allenliservice.online/leetcode-js-231-power-of-two/

// <strong>Solution:</strong>
// 1. 先判斷 n 為負數則為 false。
// 2. 再判斷 n 為 1 時，回傳 true。(2^0 = 1)
// 3. 運用 while 迴圈，將 n > 5 的數值先行減半。
// 4. 再回傳 n % 2 的餘數，如為 0 則回傳 true，如為 1 則回傳 false。

// <strong>Code 1:</strong>
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  while (n > 5) {
    n = n / 2;
  }

  return n % 2 === 0;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: n = 1
if (n === 1) return true

<strong>Example 2</strong>
Input: n = 16
while (16 > 5) {n = 16 / 2} //n = 8
return 8 % 2 === 0 //true


<strong>Example 3</strong>
Input: n = 3
return 3 % 2 !== 0 //false
*/

// <strong>Code 2:</strong>
var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  while (n >= 2) {
    if (n === 2) return true;
    n = n / 2;
  }
  return false;
};
