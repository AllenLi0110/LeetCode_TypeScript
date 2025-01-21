//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day8-2666-allow-one-function-call/

// <strong>solution:</strong>
// 建立 condition 的變數來存放 Boolean，以表達狀態的切換，當第一次執行 fn 時，
// 即觸發狀態變更，並於之後的陣列元素傳入時回傳 undefined。

// <strong>Code 1: BigO(n)</strong>
var once = function (fn) {
  let condition = false;

  return function (...args) {
    if (condition) {
      return undefined;
    } else {
      condition = true;
      return fn(...args);
    }
  };
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]

condition = false, condition = true, return fn(...args) //1 + 2 + 3
condition = true, return undefined
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]

condition = false, condition = true, return fn(...args) //5 * 7 * 4
condition = true, return undefined
condition = true, return undefined
</pre> */

// <strong>Code 2: BigO(1)</strong>
var once = function (fn) {
  let hasBeenCalled = false;
  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
};

// <strong>Code 3: BigO(1)</strong>
var once = function (fn) {
  let condition = false;

  return function (...args) {
    if (condition) {
      return undefined;
    } else {
      condition = true;
      return fn.apply(this, args);
    }
  };
};
