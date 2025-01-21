//Blog: https://allenliservice.online/leetcode-javascript-30-days-challenge-day9-2623-memoize/

// <strong>solution:</strong>
// 我們在函式內部中建立一個空的物件 cache 來當作緩存的位置，
// 然後我們運用展開運算子 ...args 來傳送陣列中的元素，
// 同時運用 JSON.stringify(args) 將元素轉成字串 key，
// 且將此字串 key 當作緩存物件 cache 的鍵，
// 如果 key 不存在於 cache 中，表示這是一個新的輸入，我們需要執行原始函式 fn(...args) 來計算結果。
// 並將結果存入緩存 cache[key] 中，以便下次使用同樣的輸入時可以直接返回結果。
// 這樣，每當你使用 memoize 函式來執行一個原始函式，它將會回傳一個具有記憶化功能的新函式。
// 這個新函式將自動緩存之前計算過的輸入和結果，以避免重複計算，從而提高執行效率。

// <strong>Code 1: BigO(1)</strong>
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
 callCount += 1;
  return a + b;
})
console.log(memoizedFn(2, 2)) // 4
console.log(memoizedFn(2, 2)) // 4
console.log(callCount) // 1 
console.log(memoizedFn(1, 2))// 3
console.log(callCount) // 1 
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
let callCount = 0;
const memoizedFactorial = memoize(function (n) {
 callCount += 1;
  return (n <= 1) ? 1 : (n * memoizedFactorial(n - 1))
})
console.log(memoizedFactorial(2)) // 2
console.log(memoizedFactorial(3)) // 6
console.log(memoizedFactorial(2)) // 2
console.log(callCount) // 3
console.log(memoizedFactorial(3)) // 6
console.log(callCount) // 3
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
let callCount = 0;
const memoizedFib = memoize(function fib(n) {
  callCount += 1;
  return  (n <= 1 ? 1 : fib(n - 1) + fib(n - 2))
});
console.log(memoizedFib(5)) // 8
console.log(callCount) //1
</pre> */
