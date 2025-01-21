//Blog: https://www.allenliservice.online/leetcode-js-392-is-subsequence/

// <strong>Solution:</strong>
// 1. 設定 i = 0, j = 0。(分別為 s 和 t 的陣列起始值)
// 2. 宣告 s 和 t 的長度為 sLength 和 tLength。
// 3. 如果 s 為空值，則返回 true。
// 4. 當 i 和 j 同時小於 s 和 t的長度時，
// 5. 如果 s 中單一字串符合 t，則進入下一個 s 單一字串。
// 6. 如果不符合，則判斷下一個 t 的單一字串。(依序比對)
// 7. 如果 i 有符合 s 的長度，則返回 ture，否則為 false。

var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  let sLength = s.length,
    tLength = t.length;

  if (s.length === 0) return true;
  while (i < sLength && j < tLength) {
    if (s[i] === t[j]) i++;
    j++;
  }
  return i === sLength;
};

/* < strong > Example 1</strong >
<pre style='background-color:#ggg'>
Input: s = "abc", t = "ahbgdc"
i = 0 ,j = 0
sLength = 3, tLength = 6

step.1
i < sLength //0 < 3
j < tLength //0 < 6
s[0] === t[0]; i++ //a === a; i = 1
j++ //j = 1

step.2
i < sLength //1 < 3
j < tLength //1 < 6 
s[1] !== t[1] //b !== h
j++ //j = 2

step.3
i < sLength //1 < 3
j < tLength //2 < 6 
s[1] === t[2]; i++ //b === b; i = 2
j++ //j = 3

step.4
i < sLength //2 < 3
  j < tLength //3 < 6 
  s[2] !== t[3] //c !== g
j++ //j = 4

step.5
i < sLength //2 < 3
  j < tLength //4 < 6
  s[2] !== t[4] //c !== d
j++ //j = 5

step.6
i < sLength //2 < 3
  j < tLength //5 < 6
  s[2] === t[5]; i++ //c === c; i = 3
j++ //j = 6

break //i < sLength(3 = 3), j < tLength(6 = 6)
</pre> */ f;
