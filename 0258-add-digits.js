//Blog: https://www.allenliservice.online/leetcode-js-258-add-digits/

// <strong>Solution:</strong>
// 1. 如果 num 介於 0 ~9 之間，回傳 num。
// 2. 當(num > 9)時宣告 sum = 0，且
// 3. 當(num 的整數不等於 0)，
// 執行以下：
// (1.) sum = 0 + 個位數
// (2.) num = num / 10
//
//     將 num = sum，回傳 num。

// <strong>Code 1:</strongc>
var addDigits = function (num) {
  if (num < 10 && num >= 0) return num;

  while (num > 9) {
    let sum = 0;
    while (parseInt(num) !== 0) {
      sum += parseInt(num % 10);
      num /= 10;
    }
    num = sum;
  }
  return num;
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: num = 38

38 !== 0
--> 3 + 8 --> 11

11 !== 0
--> 1 + 1 --> 2

2 < 9, return 2
</pre> */

// <strong>Code 2:</strongc>
var addDigits = function (num) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
};

// <strong>Code 3:</strongc>
var addDigits = function (num) {
  return 1 + ((num - 1) % 9);
};
