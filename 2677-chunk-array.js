//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day21-2677-chunk-array/

// <strong>solution:</strong>
// 建立一個名叫 chunk 的函式，分別放入 arr, size 進去，先假設如果 arr 的長度不足以滿足 size，
// 此時有種作法，將原本的 arr 放入到新的空陣列中，或是原本的 arr 沒有元素，則回傳空陣列 []。
// 接著宣告要將符合 size 長度的元素，運用 while 迴圈搭配 splice 進行分割 size 長度，
// 直到長度為 0，同時將該元素用 push 放到 list 陣列中，並回傳 list。

// <strong>Code 1: BigO(n)</strong>
var chunk = function (arr, size) {
  if (arr.length < size) return arr.length ? [arr] : [];

  const res = [];
  while (arr.length) {
    res.push(arr.splice(0, size));
  }
  return res;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
console.log(chunk([1,2,3,4,5], 1))

[ [ 1 ] ]
[ [ 1 ], [ 2 ] ]
[ [ 1 ], [ 2 ], [ 3 ] ]
[ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
//Output: [[1],[2],[3],[4],[5]]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
console.log(chunk([1,2,3,4,5], 1))
console.log(chunk([1,9,6,3,2], 3))

[ [ 1, 9, 6 ] ]
[ [ 1, 9, 6 ], [ 3, 2 ] ]
//Output: [[1,9,6],[3,2]]
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
console.log(chunk([8,5,3,2,6], 6))

[ [ 8, 5, 3, 2, 6 ] ]
//Output: [[8,5,3,2,6]]
</pre>

<strong>Example 4</strong>
<pre style='background-color:#ggg'>
console.log(chunk([], 1))

[]
//Output: []
</pre> */

// <strong>Code 2: BigO(n)</strong>
var chunk = function (arr, size) {
  let res = [];

  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};
