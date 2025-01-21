//Blog: https://allenliservice.online/leetcode-javascript-30-days-challenge-day1-2667-create-hello-world-function/

// <strong>solution:</strong>
// 從範例1中可以看到，宣告了 f 為 createHelloWorld() 的這個 function，且範例2嘗試將符號、null、整數...等，放入 function 中。
// 然而我們可以看到官方在 createHelloWorld 的函式中，希望運用「...args」展開運算式，試圖將一些 input 放入 function 後進行回傳，而題目又希望只會回傳指定字串。
// 所以我們僅需確保這個 function 被呼叫之後，能夠回傳 "Hello World" 即可。
// ex. args = arguments

// <strong>Code 1: BigO(1)</strong>;
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
const f = createHelloWorld();
f(); // "Hello World"
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
const f = createHelloWorld();
f({}, null, 42); // "Hello World"
</pre> */
