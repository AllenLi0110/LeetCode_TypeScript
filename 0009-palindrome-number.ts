//Blog: https://www.allenliservice.online/leetcode-js-9-palindrome-number/

// <strong>Solution:</strong>
// 1. 回傳 x 的判斷式：
//    a = x 的反轉後字串。
//    b = x.的初始字串。
//    return a === b

// < strong > Code 1:</strongc >
var isPalindrome = function (x: number): boolean {
  if (x < 0) return false;
  if (x === 0) return true;
  return x.toString().split("").reverse().join("") === x.toString();
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: x = 121
console.log(x.toString().split('').reverse().join(''), x.toString())

return 121 === 121 //true */

// < strong > Code 2:</strongc >
var isPalindrome = function (x: number): boolean {
  if (x < 0) return false;
  if (x === 0) return true;
  let number: number = x,
    reverse: number = 0;
  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reverse === x;
};

// < strong > Code 3:</strong >
var isPalindrome = function (x: number): boolean {
  if (x < 0) return false;
  if (x === 0) return true;
  return `${x}`.split("").reverse().join("") === `${x}`.toString();
};
