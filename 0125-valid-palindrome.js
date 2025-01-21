//Blog: https://www.allenliservice.online/leetcode-js-125-valid-palindrome/

// <strong>Solution:</strong>
// 1. Input s 轉換成小寫字母。
// 2. Input s 將特殊符號移除。
// 3. 宣告 reverseWord 為反轉後的 s。
// 4. 回傳 s 中符合 reverseWord，完全符合為 0，沒有符合為 -1。

// <strong>Code:</strong>
var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s.replace(/[^a-z0-9]/gi, "");
  let reverseWord = s.split("").reverse().join("");

  return s.indexOf(reverseWord) === 0;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: s = "A man, a plan, a canal: Panama"
s.toLowerCase() = a man, a plan, a canal: panama
s.replace = amanaplanacanalpanama
reverseWord = s.split("").reverse().join("") => amanaplanacanalpanama

return true
*/
