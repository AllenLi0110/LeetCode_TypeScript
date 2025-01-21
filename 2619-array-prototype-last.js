//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day23-2619-array-prototype-last/

// <strong>solution:</strong>
// 依據題目需求建立一個 Array 的模型叫做 last，
// 這一個函式可以在陣列呼叫時回傳最後一個元素，
// 如果沒有元素則回傳 -1。

// <strong>Code 1: BigO(1)</strong>
Array.prototype.last = function () {
  if (this.length) {
    return this[this.length - 1];
  }
  return -1;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
nums = [1,2,3]
console.log(nums.last()) //3
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
nums = []
console.log(nums.last()) //-1
</pre> */
