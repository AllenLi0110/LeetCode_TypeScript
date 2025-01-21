//Blog:https://www.allenliservice.online/leetcode-js-459-repeated-substring-pattern/

// <strong>solution:</strong>
// 首先思考 s 字串是否可以組成多重個 sub s字串所需要的條件，
// 從總長度、最長的子字串長度為總長度的一半、總長度下的子字串會有幾組，
// 接著透過找出最短結果的字串來進行遍歷，
// 並依序比對得到結果。

// <strong>Code 1: BigO(n^2)</strong>
var repeatedSubstringPattern = function (s) {
  // appending multiple copies of the substring
  // 1.0 s 為 多個 sub s 組成。
  const n = s.length; //4

  // 1.1 sub s 最多的長度為 s / 2。
  for (let i = 1; i <= n / 2; i++) {
    //2
    // 1.2 sub s 會有幾組？ (n % i === 0) ex. 8 % 2 === 0
    if (n % i === 0) {
      const substring = s.slice(0, i);
      let repeated = "";
      // 1.3 透過遍歷找出符合的 sub s。
      for (let j = 0; j < n / i; j++) {
        repeated += substring; //aaaa, abab
      }
      if (repeated === s) return true;
    }
  }
  return false;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
a
aa
aaa
aaaa
ab
abab
input: (s = "abab") output: true // Excellent!
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
a
aa
aaa
input: (s = "aba") output: false // Excellent!
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
a
aa
aaa
aaaa
aaaaa
aaaaaa
aaaaaaa
aaaaaaaa
aaaaaaaaa
aaaaaaaaaa
aaaaaaaaaaa
aaaaaaaaaaaa
ab
abab
ababab
abababab
ababababab
abababababab
abc
abcabc
abcabcabc
abcabcabcabc
input: (s = "abcabcabcabc") output: true // Excellent!
</pre> */
