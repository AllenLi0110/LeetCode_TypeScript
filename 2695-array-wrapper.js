//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day28-2695-array-wrapper/

// <strong>solution:</strong>
// 定義一個 ArrayWrapper 的 constructor function，並接受放入 nums 參數。
// 接著建構以下兩個原型：
// valueOf 方法：為計算與回傳 nums 陣列中所有元素的總和，運用陣列的 reduce 搭配箭頭函式來完成。
// toString 方法：為回傳一個包含 nums 陣列的格式化字串，運用 String() 將 nums 陣列轉換成字串，
// 並添加"[", "]"來完成陣列樣式的結果(字串)。

// <strong>Code 1: BigO(n)</strong>
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((a, b) => a + b, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${String(this.nums)}]`;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // 10
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
const obj = new ArrayWrapper([23,98,42,70]);
console.log(String(obj)); // "[23,98,42,70]"
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
console.log(obj1 + obj2); // 0
</pre> */
