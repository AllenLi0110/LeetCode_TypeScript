//Blog: https://allenliservice.online/leetcode-javascript-30-days-challenge-day2-2620-counter/

// <strong>solution:</strong>
// 首先要注意題目給予的函式運用了閉包(closure)的概念，在計數的部分可以運用後置遞增運算符 n++ 來做運算，
// 遞增運算符 ++ 的作用是將操作數的值增加 1，並返回遞增後的值。但在這種情況下，n++ 實際上是將 n 的值返回，然後才將 n 的值增加 1。
// 當首次調用 counter() 時，n 的初始值是 10。因此，它會返回當前的值 10，然後將 n 的值增加 1，變成 11。
// 接下來，當再次調用 counter() 時，n 的值已經是 11。這時，它會返回 11，然後將 n 的值增加 1，變成 12。
// 每次調用 counter() 都會先返回 n 的值，然後將 n 的值增加 1，這樣就實現了遞增的效果(n、n+1、n+2)。

// <strong>Code 1: BigO(1)</strong>;
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
const counter = createCounter(-2)
counter() // -2
counter() // -1
counter() // 0
counter() // 1
counter() // 2
</pre> */
