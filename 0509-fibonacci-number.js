//Blog: https://www.allenliservice.online/leetcode-js-509-fibonacci-number/

// <strong>Solution:</strong>
// 1. 判斷 f(0) = 0 為 0, f(1) = 1 為 1。
// 2. 每一輪的 f(n) 套入 fib function 拆分為 f(1) 與 f(0) 的組合後進行加總。

// <strong>Code.1:</strong>
var fib = function (n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 2

fib(2 - 1) = fib(1) = 1
fib(2 - 2) = fib(0) = 0
return fib(1) + fib(0) = 1
</pre> */

//<strong>Code.2: dp</strong>
var fib = function (n) {
  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
