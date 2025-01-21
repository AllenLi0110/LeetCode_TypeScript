//Blog: https://www.allenliservice.online/leetcode-js-205-isomorphic-strings/

// <strong>Solution:</strong>
// 1. 先設定 objectS = {}, objectT = {}。
// 2. 運用 for 迴圈次數為 s 的長度，每一輪比對內容。
// 3. 如不同則返回 false
// 4. 其餘狀況將該輪的 object內容更新。
// 5. 完整走完迴圈則返回 ture。

// <strong>Code 1:</strong>
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let objectS = {},
    objectT = {};

  for (let i = 0; i < s.length; i++) {
    if (objectS[s[i]] === objectT[t[i]]) {
      objectS[s[i]] = i;
      objectT[t[i]] = i;
    } else {
      return false;
    }
  }
  return true;
};

/* < strong > Example 1</strong >
<pre style='background-color:#ggg'>
Input: s = "egg", t = "add"

step.1
i = 0
objectS[s[0]] = underlined, objectT[t[0]] = underlined //===
objectS[s[0]] = i //0
objectT[t[0]] = i //0

step.2
i = 1
objectS[s[1]] = underlined, objectT[t[1]] = underlined //===
objectS[s[1]] = i //1
objectT[t[1]] = i //1

step.3
i = 2
objectS[s[2]] = underlined, objectT[t[2]] = underlined //===
objectS[s[1]] = i //2
objectT[t[1]] = i //2

return true
</pre> */

// <strong>Code 2:</strong>
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }
  return true;
};
