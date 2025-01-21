//Blog: https://www.allenliservice.online/leetcode-js-409-longest-palindrome/

// <strong>Solution:</strong>
// 1. 設定 hashTable 為 Object literals { }。
// 2. 宣告符合字串的長度為 0，條件為 false(如為中心對稱則需 + 1)。
// 3. 將 hashTable 中依序放入物件與對應個數。
// 4. 將每一個 hashTable 中的字母個數，進行 2 的餘數計算：
// <pre style='background-color:#ggg'>
//  - 剩餘 0: 長度加上此字母的個數
//  - 不剩餘 0: 長度加上此字母的個數 - 1 (此數中心點，故須 - 1)
//  且符合中心對稱條件。
// </pre>
// 5. 如果 condition 設定的條件為:
// <pre style='background-color:#ggg'>
//  - condition = true: 長度 + 1
//  - condition = false: 長度維持不變
// </pre>
// 6. 回傳長度。

// <strong>Code 1: BigO(n)</strong>
var longestPalindrome = function (s) {
  const hashTable = {};
  let longestLength = 0,
    condition = false;

  for (let i = 0; i < s.length; i++) {
    hashTable[s[i]] = (hashTable[s[i]] || 0) + 1;
  }
  for (let value in hashTable) {
    if (hashTable[value] % 2 === 0) {
      longestLength += hashTable[value];
    } else {
      condition = true;
      longestLength += hashTable[value] - 1;
    }
  }

  if (condition) longestLength += 1;
  return longestLength;
};
/* < strong > Example 1</strong >
<pre style='background-color:#ggg'>
Input: s = "abccccdd"
longestLength = 0, condition = false
hashTable = {a: 1}
hashTable = {a: 1, b: 1}
hashTable = {a: 1, b: 1, c: 1}
hashTable = {a: 1, b: 1, c: 2}
hashTable = {a: 1, b: 1, c: 3}
hashTable = {a: 1, b: 1, c: 4}
hashTable = {a: 1, b: 1, c: 2, d: 1}
hashTable = {a: 1, b: 1, c: 4, d: 2}

step.1
hashTable[value] % 2 = 1 //{ a: 1}, 1 % 2 = 1
condition = true
longestLength += counts[value] - 1 //0 + 1 - 1 = 0

step.2
counts[value] % 2 = 1 //{ b: 1}, 1 % 2 = 1
condition = true
longestLength += hashTable[value] - 1 //0 + 1 - 1 = 0

step.3
hashTable[value] % 2 = 0 //{ c: 4}, 4 % 2 = 0
condition = true
longestLength += hashTable[value] //0 + 4 = 4

step.4
hashTable[value] % 2 = 0 //{ d: 2}, 2 % 2 = 0
condition = true
longestLength += hashTable[value] //4 + 2 = 6

step.5
condition = true => longestLength += 1 = 6 + 1 = 7 
(ex.符合中心對稱，故對稱的長度再加上中心點。

return longestLength //7
</pre> */

// <strong>Code 2: BigO(n)</strong>
var longestPalindrome = function (s) {
  const hashTable = new Set();
  let longestLength = 0;

  for (let key of s) {
    if (hashTable.has(key)) {
      longestLength += 2;
      hashTable.delete(key);
    } else {
      hashTable.add(key);
    }
  }
  return longestLength + (hashTable.size > 0 ? 1 : 0);
};
