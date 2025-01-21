//Blog: https://www.allenliservice.online/leetcode-js-342-power-of-four/

// <strong>Solution:</strong>
// 1. 先判斷 n 為負數則為 false。
// 2. 再判斷 n 為 1 時，回傳 true。(4^0 = 1)
// 3. 運用 while 迴圈，將 n > 5 的數值先行減半。
// 4. 再回傳 n % 4 的餘數，如為 0 則回傳 true，如為 1 則回傳 false。

// <strong>Code 1:</strongc>
var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  while (n > 5) {
    n = n / 4;
  }

  return n % 4 === 0;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 16

while (16 > 5) {n = 16 / 4} //n = 4
return 4 % 4 === 0 //true
</pre> */

// <strong>Code 2: Bit Manipulation</strong>
var isPowerOfFour = function (n) {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};

/* <strong>Example 1</strong>
(n & (n - 1)) === 0

4 =>   100
3 =>   011
     & ---
       000 
</pre> */
