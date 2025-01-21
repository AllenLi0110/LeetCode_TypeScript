//Blog: https://allenliservice.online/leetcode-javascript-30-days-challenge-day7-2629-function-composition/

// <strong>solution:</strong>
// 這題最重要的是了解題目的說明，題目將條件依序放到陣列中，
// 同時希望我們由右到左的讀取陣列函式的內容，
// 這個過程我們可以使用reduceRight()來完成指定功能，如下：

// <strong>Code 1: BigO(n)</strong>
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, cur) => cur(acc), x);
  };
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
functions.reduceRight((acc, cur) => cur(acc), x)

functions.reduceRight((acc, cur) => cur(2 * 4), 4) //acc = 8
functions.reduceRight((acc, cur) => cur(8 * 8), 8) //acc = 64
functions.reduceRight((acc, cur) => cur(64 + 1), 64) //acc = 65
return 65;
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
functions.reduceRight((acc, cur) => cur(acc), x)

functions.reduceRight((acc, cur) => cur(10 * 1), 1) //acc = 10
functions.reduceRight((acc, cur) => cur(10 * 10), 10) //acc = 100
functions.reduceRight((acc, cur) => cur(10 + 100), 100) //acc = 1000
return 1000;
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: functions = [], x = 42
functions.reduceRight((acc, cur) => cur(acc), x)

functions.reduceRight((acc, cur) => cur(acc), 42)
return 42;
</pre> */

// <strong>Code 2: BigO(n)</strong>
var compose = function (functions) {
  return function (x) {
    return functions.reverse().reduce((acc, cur) => cur(acc), x);
  };
};

// <strong>Code 3: BigO(n)</strong>
var compose = function (functions) {
  return function (x) {
    while (functions.length) {
      x = functions.pop()(x);
    }
    return x;
  };
};

// <strong>Code 4: BigO(n)</strong>
var compose = function (functions) {
  return function recursion(x) {
    //如果funcitons中沒有陣列元素，則回傳x的值。
    if (functions.length === 0) return x;

    //*重點，將x重新賦值為：移除functions中最右邊的陣列的同時，帶入(x)的參數進去執行取得結果。
    x = functions.pop()(x);

    //重複呼叫遞迴函式直到陣列中無元素。
    return recursion(x);
  };
};
