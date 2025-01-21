//Blog: https://www.allenliservice.online/leetcode-js-412-fizz-buzz/

// <strong>solution:</strong>
// 1. 宣告一個 ans 陣列。
// 2. 透過 for 迴圈執行 n 個次數。
// 3. 使用 if 條件，如下：
// <pre style='background-color:#ggg'>
// - i % 15 === 0 //ans[n] = 'FizzBuzz'
// - i % 5 === 0 //ans[n] = 'Buzz'
// - i % 3 === 0 //ans[n] = 'Fizz'
// </pre>
// 4. 如不符合上述條件，則回傳當前的 n 值。

// <strong>Code 1:</strong>
var fizzBuzz = function (n) {
  let ans = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      ans.push("FizzBuzz");
    } else if (i % 5 === 0) {
      ans.push("Buzz");
    } else if (i % 3 === 0) {
      ans.push("Fizz");
    } else {
      ans.push(i + "");
    }
  }
  return ans;
};

/* <strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: n = 15

i = 1 //1
i = 2 //2
i = 3 //'Fizz'
i = 4 //'4'
i = 5 //'Buzz'
i = 6 //'Fizz'
i = 7 //7
i = 8 //8
i = 9 //'Fizz'
i = 10 //'Buzz'
i = 11 //11
i = 12 //'Fizz'
i = 13 //13
i = 14 //14
i = 15 //'FizzBuzz'

return ans //["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
</pre> */

// <strong>Code 2: Conditional(ternary) operator</strong>
var fizzBuzz = function (n) {
  let ans = [];

  for (let i = 1; i <= n; i++) {
    s = (i % 3 == 0 ? "Fizz" : "") + (i % 5 == 0 ? "Buzz" : "") || i + "";
    ans.push(s);
  }
  return ans;
};
