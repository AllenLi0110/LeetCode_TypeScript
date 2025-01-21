//Blog:https://www.allenliservice.online/leetcode-js-14-longest-common-prefix/

//<strong>Solution:</strong>
// 1. 先排除input不是字串的狀況(小優化)。(ex.傳入空值)
// 2. 以陣列中第一組字串作為基準，互相比對字串是否連續相符。
// 3. 如相符放入prefix陣列，不相符即回傳當前的prefix。

//<strong>Code 1:</strong>
var longestCommonPrefix = function (strs: string[]): string {
  if (!strs.length) return "";
  let prefix: string = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) return prefix;
    }
    prefix += strs[0][i];
  }
  return prefix;
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
let i=0, i<5; 
let j=0, j<2;

step1
strs[0][0] === strs[1][0] //['f'lower] = ['f'low] --->true
strs[1][0] === strs[2][0] //['f'low] = ['f'light] --->true
prefix += ['f']

step2
strs[0][1] === strs[1][1] //[f'l'ower] = [f'l'ow] --->true
strs[1][1] === strs[2][1] //[f'l'ow] = [f'l'ight] --->true
prefix += ['l']

step2
strs[0][2] === strs[1][2] //[fl'o'wer] = [fl'o'w] --->true
strs[1][2] === strs[2][2] //[fl'o'w] = [fl'i'ght] --->false
return prefix = ['fl']
</pre>  */

//<strong>Code 2:</strong>
var longestCommonPrefix = function (strs: string[]): string {
  if (!strs.length) return "";

  let prefix: string = strs[0];
  for (const str of strs) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
};
