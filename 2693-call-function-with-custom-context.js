//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day26-2693-call-function-with-custom-context/

// <strong>solution:</strong>
// 建立 function.prototype 來定義一個叫做 callPolyfill 的函式，
// 將函式中的 this 來指向呼叫的陣列，同時用 apply 的方法來將參數 context 、
// 運用展開運算子的第二個參數依序放入後回傳結果。
// 當我們呼叫函式 function.prototype 時，會將參數通過函式內部的 this 傳遞物件的內容。

// <strong>Code 1: BigO(n)</strong>
Function.prototype.callPolyfill = function (context, ...args) {
  // return this.bind(context)(...args)
  return this.apply(context, args);
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
var fn = function add(b) {
  return this.a + b;
}

console.log(fn.callPolyfill({ "a": 5 }, 7)); //12
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
var fn = function tax(price, taxRate) { 
 return `The cost of the ${this.item} is ${price * taxRate}`; 
}

console.log(fn.callPolyfill({"item": "burger"}, 10, 1,1))
//The cost of the burger is 10
</pre> */
