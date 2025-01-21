//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day15-2627-debounce/

// <strong>solution:</strong>
// 宣告 debounce 函式用來限制某個函式在指定時間間隔內只執行一次。
// 當呼叫 debounce 函式時，它會清除之前設定的計時器並重新設定一個新的計時器。
// 只有在最後一次呼叫 debounce 函式後，計時器結束後才會執行傳入的函式。
// ex. 例如處理使用者輸入、監聽事件。

// <strong>Code 1: debounce BigO(1)</strong>
var debounce = function (fn, t) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);
//[ 126, [ 2 ] ]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 20);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 100);
//[ 71, [ 1 ] ] 
//[ 122, [ 2 ] ]
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 150);
setTimeout(() => dlog(1, 2), 50);
setTimeout(() => dlog(3, 4), 300);
setTimeout(() => dlog(5, 6), 300); 
//[ 202, [ 1, 2 ] ]
//[ 450, [ 5, 6 ] ]
</pre> */
