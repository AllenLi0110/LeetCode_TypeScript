//Blog: https://www.allenliservice.online/leetcode-js-171-excel-sheet-column-number/

// <strong>solution:</strong>
// 1. 宣告 sum 作為數值計算的變數，以及 EXP 作為數值的次方。
// 2. 透過用字串位數來進行迴圈。
// 3. 運用 charCodeAt() 來對 columnTitle 的單一字串進行數值轉換。
// <pre style='background-color:#ggg'>
// 依據 ANSI CODE 的轉換，如下：
// A = 65,
// B = 66,
// C = 67
//  ...
// X = 88
// Y = 89
// Z = 90
// </pre>
// 4. 最後透過 EXP 與「sum += 」來完成數值加總。
// <pre style='background-color:#ggg'>
// A = (65 - 64) * (26 ** 0) //1 * 1 = 1
//
// "A" A = (65 - 64) * (26 ** 1) //1 * 26 = 26
//  A "A" = (65 - 64) * (26 ** 0) //1 * 1 = 1
// => 26 + 1 = 27
// </pre>

// <strong>Code 1:</strong>
var titleToNumber = function (columnTitle) {
  let sum = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let EXP = columnTitle.length - 1 - i;
    sum += (columnTitle[i].charCodeAt(0) - 64) * 26 ** EXP;
  }

  return sum;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: columnTitle = "A"
EXP = 26 ** 0

A = (65 - 64) * (26 ** 0) //1 * 1 = 1
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: columnTitle = "AB"
EXP = (i = 0) * 26 ** 1 + (i = 1) * 26 * 0

"A" B = (65 - 64) * (26 ** 1) //1 * 26 = 26
 A "B" = (66 - 64) * (26 ** 0) //2 * 1 = 2
=> 26 + 2 = 28
</pre> */
