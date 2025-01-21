//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day15-2676-throttle/

// <strong>solution:</strong>
// 節流函數 throttle 的宣告中，timeout 被初始化為 null，nextTimeToCallFn 被初始化為 0。
// 第一次呼叫時，delay 的計算結果為 0，表示無需延遲立即執行。
// 在後續的呼叫中，delay 的計算是基於下一次呼叫函數的時間減去當前時間。
// 如果之前已經設置了計時器 timeout，則使用 clearTimeout(timeout) 清除計時器。
// 如果沒有設置過計時器，則執行 setTimeout() 並更新 nextTimeToCallFn 變數的值，
// 這樣可以確保在下一次執行 fn 前的延遲時間。

// <strong>Code 1: Throttle BigO(1)</strong>
var throttle = function (fn, t) {
  let timeout = null;
  let nextTimeToCallFn = 0;
  return function (...args) {
    const delay = Math.max(0, nextTimeToCallFn - Date.now());
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
      nextTimeToCallFn = Date.now() + t;
    }, delay);
  };
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = throttle(log, 100);
setTimeout(() => dlog(1), 20);
//[{"t":20,"inputs":[1]}]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = throttle(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 100);
//[{"t":50,"inputs":[1]},{"t":100,"inputs":[2]}]
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>

let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = throttle(log, 70);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);
setTimeout(() => dlog(8), 90);
setTimeout(() => dlog(5,7), 140);
setTimeout(() => dlog(9,4), 300);
//[{"t":50,"inputs":[1]},{"t":120,"inputs":[8]},{"t":190,"inputs":[5,7]},{"t":300,"inputs":[9,4]}]
</pre> */
