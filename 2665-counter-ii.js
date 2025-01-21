//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day3-2665-counter-ii/

// <strong>solution:</strong>
// 宣告一個變數 value，並用來儲存初始的值，接著：
// - 定義 increment 箭頭函式： () => ++value ，因表示該函式沒有參數，只需執行 ++value 運算。
// - 定義 reset 箭頭函式： () => value = init ，因表示該函式沒有參數，只需回傳 value 的初始 init 值。
// - 定義 decrement 箭頭函式： () => --value 因表示該函式沒有參數，只需執行 --value 運算。
// 最後將 increment、reset 和 decrement 這三個函式封裝在一個物件中，並將該物件作為 createCounter 函式的回傳值。

// <strong>Code 1: BigO(1)</strong>
var createCounter = function (init) {
  let value = init;

  const increment = () => ++value;
  const reset = () => (value = init);
  const decrement = () => --value;

  return { increment, reset, decrement };
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
const counter = createCounter(0)
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
</pre> */
