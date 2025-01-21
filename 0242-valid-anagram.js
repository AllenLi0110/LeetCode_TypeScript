//Blog: https://www.allenliservice.online/leetcode-js-242-valid-anagram/

// <strong>Solution:</strong>
// 1. 先判斷 s 和 t 的長度是否不相同，並回傳 false。
// 2. 將 s 和 t 字串切割，並進行字母排序，再將字母組合。
// 3. 判斷 s 和 t 是否相同，並回傳true，反之回傳 false。

// <strong>Code 1: BigO(n log n)</strong>
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sortS = s.split("").sort().join(""),
    sortT = t.split("").sort().join("");
  return sortS === sortT;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: s = "anagram", t = "nagaram"

s = "aaagmnr"
t = "aaagmnr"

return true */

// <strong>Code 2: BigO(n log n)</strong>
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  if (s.split("").sort().join("") === t.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
};

// <strong>Code 3: BigO(2n)</strong>
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const hashTable = {};

  for (let i = 0; i < s.length; i++) {
    hashTable[s[i]] = (hashTable[s[i]] || 0) + 1;
  }
  for (let j = 0; j < t.length; j++) {
    if (!hashTable[t[j]]) return false;
    hashTable[t[j]]--;
  }

  return true;
};
