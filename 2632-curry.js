//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day10-2632-curry/

// <strong>solution:</strong>
// 由題意可以知道以下四種呼叫參數的方式都需要可以完成執行：
// <pre style='background-color:#ggg'>
// 1. csum(1)(2)(3) //6
// 2. csum(1)(2, 3) //6
// 3. csum(1, 2)(3) //6
// 4. csum(1, 2, 3) //6
// </pre>
// 我們試著宣告一個 nums 當作空的陣列[]，並用來存放參數。
// 接著我們可以將 return function curried(...args){} 視為高階函數(High-order function)，
// 也就是指可以接受函式作為參數或將函式作為結果返回的函式。
// 接下來，我們希望調用這個 curried function 來傳遞一個新的 curried function，
// 同時我們要判斷參數符合指定數量時回傳運算的結果。
// ex. 在 curried function 內部，通過 fn.length 可以取得 sum 函式的形式的參數數量。
// 在 curried function 執行中，每次調用 csum 時，傳入的參數都被追加到 nums 陣列中。
// 當 nums 的長度等於 fn.length 時，表示已經接收到足夠的參數，可以調用原始的 sum 函式，並回傳計算結果。

// <strong>Code 1: BigO(1)</strong>
var curry = function (fn) {
  let nums = [];

  return function curried(...args) {
    nums = [...nums, ...args];
    if (fn.length === nums.length) {
      const res = fn(...nums);
      nums = [];
      return res;
    } else {
      return curried;
    }
  };
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
function sum(a, b, c) { return a + b + c }
const csum = curry(sum)
console.log(csum(1)(2)(3))
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
function sum(a, b, c) { return a + b + c }
const csum = curry(sum)
console.log(csum(1, 2)(3))
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
function sum(a, b, c) { return a + b + c }
const csum = curry(sum)
console.log(csum()()(1, 2, 3))
</pre>

<strong>Example 4</strong>
<pre style='background-color:#ggg'>
function lift() { return 42; }
const csum = curry(lift)
console.log(csum())
</pre> */
