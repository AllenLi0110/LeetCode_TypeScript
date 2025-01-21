//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day24-2631-group-by/

// <strong>solution:</strong>
// 運用 JavaScript中的 Array.prototype 來建立一個 groupBy 的函式：
// 首先依據題目需求建立對應需回傳的 {} 叫做 group，
// 運用 for of 來遍歷 array 中的每個 element，
// 並宣告變數 key 為 element 經過 fn 函式處理好的結果。
// 接著，檢查 group 物件中是否存在該陣列的 key，
// - 如果有，則將該元素推入對應的陣列中。
// - 如果沒有，則建立一個新的陣列，將該元素作為值傳入。
// 當迭代完陣列中所有的元素後，回傳最後的 group 物件。

// <strong>Code 1: BigO(1)</strong>
Array.prototype.groupBy = function (fn) {
  const group = {};

  for (const element of this) {
    const key = fn(element);
    if (group[key]) {
      group[key].push(element);
    } else {
      group[key] = [element];
    }
  }
  return group;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
] 
const fn = function (item) { 
  return item.id; 
}

console.log(array.groupBy(fn))
{ '1': [ { id: '1' } ] }
{ '1': [ { id: '1' }, { id: '1' } ] }
{ '1': [ { id: '1' }, { id: '1' } ], '2': [ { id: '2' } ] }
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
]
const fn = function (list) { 
  return String(list[0]); 
}

console.log(array.groupBy(fn));
{ '1': [ [ 1, 2, 3 ] ] }
{ '1': [ [ 1, 2, 3 ], [ 1, 3, 5 ] ] }
{ '1': [ [ 1, 2, 3 ], [ 1, 3, 5 ], [ 1, 5, 9 ] ] }
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const fn = function (n) { 
  return String(n > 5);
}

console.log(array.groupBy(fn))
{ false: [ 1 ] }
{ false: [ 1, 2 ] }
{ false: [ 1, 2, 3 ] }
{ false: [ 1, 2, 3, 4 ] }
{ false: [ 1, 2, 3, 4, 5 ] }
{ false: [ 1, 2, 3, 4, 5 ], true: [ 6 ] }
{ false: [ 1, 2, 3, 4, 5 ], true: [ 6, 7 ] }
{ false: [ 1, 2, 3, 4, 5 ], true: [ 6, 7, 8 ] }
{ false: [ 1, 2, 3, 4, 5 ], true: [ 6, 7, 8, 9 ] }
{ false: [ 1, 2, 3, 4, 5 ], true: [ 6, 7, 8, 9, 10 ] }
</pre> */
