//Blog: https://www.allenliservice.online/leetcode-js-263-ugly-number/

// <strong>Solution:</strong>
// 1. 運用 for of 來將陣列數值依序放入。
// 2. 使用 while 來判斷，當 n 可以被整除，則將 n / p。
//                     當 n 沒法被整除，則 break。
// 3. 回傳 n === 1 的結果。

// <strong>Solution:</strong>
// 1. 運用 for of 來將陣列數值依序放入。
// 2. 使用 while 來判斷，當 n 可以被整除，則將 n / p。
//                     當 n 沒法被整除，則 break。
// 3. 回傳 n === 1 的結果。

// <strong>Code 1:</strongc>
var isUgly = function (n) {
  for (let element of [2, 3, 5]) {
    while (n && n % element === 0) {
      n /= element;
    }
  }
  return n === 1;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 6
n = 6, element = 2, 3, 5
console.log(n, element, (n % element === 0))

step.1
6, 2, true
3, 2, false

step.2
3, 3, true
1, 3, false

step.3
1 5 false

return n === 1 //true
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: n = 1
n = 1, element = 2, 3, 5
console.log(n, element, (n % element === 0))

step.1
1 2 false

step.2
1 3 false

step.3
1 5 false

return  n === 1 //true
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: n = 14

step.1
14 2 true
7 2 false

step.2
7 3 false

step.3
7 5 false

return  n !== 1 //false
</pre> */

// <strong>Code 2:</strong>
var isUgly = function (n) {
  if (n <= 0) return false;
  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;
  return n === 1;
};
