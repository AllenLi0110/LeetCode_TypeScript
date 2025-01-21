//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day22-2625-flatten-deeply-nested-array/

// <strong>solution:</strong>
// 首先建立一個空的陣列 res，用來存放展開後的結果。
// 定義ㄧ個內部的遞迴函式 helper 來接受對應的參數，且需還原的巢狀陣列由 0 開始計算到指定的 n。
// 在 helper 內部遍歷 arr 中的每個元素，注意如果確認陣列的屬性則會回傳 object(console.log(typeof [1, 2, 3]) //object)，
// 以此為遞迴的條件搭配指定的深度來將陣列中的元素一一拆解出來。

// <strong>Code 1: BigO(n)</strong>
var flat = function (arr, n) {
  const res = [];

  function helper(arr, depth) {
    for (const val of arr) {
      if (typeof val === "object" && depth < n) {
        helper(val, depth + 1);
      } else {
        res.push(val);
      }
    }
    return res;
  }
  return helper(arr, 0);
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0))
n = 0

1 number //[ 1 ]
2 number //[ 1, 2 ]
3 number //[ 1, 2, 3 ]

[ 4, 5, 6 ] object
[ 1, 2, 3, [ 4, 5, 6 ] ]

[ 7, 8, [ 9, 10, 11 ], 12 ] object
[ 1, 2, 3, [ 4, 5, 6 ], [ 7, 8, [ 9, 10, 11 ], 12 ] ]

[ 13, 14, 15 ] object
[ 1, 2, 3, [ 4, 5, 6 ], [ 7, 8, [ 9, 10, 11 ], 12 ], [ 13, 14, 15 ] ]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)) 
n = 1

1 number //[ 1 ]
2 number //[ 1, 2 ]
3 number //[ 1, 2, 3 ]

[ 4, 5, 6 ] object
4 number //[ 1, 2, 3, 4 ]
5 number //[ 1, 2, 3, 4, 5 ]
6 number //[ 1, 2, 3, 4, 5, 6 ]

[ 7, 8, [ 9, 10, 11 ], 12 ] object
7 number //[ 1, 2, 3, 4, 5, 6, 7 ]
8 number //[ 1, 2, 3, 4, 5, 6, 7, 8 ]

[ 9, 10, 11 ] object, depth < n //1 < 1
[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ] ]
12 number //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12 ]

[ 13, 14, 15 ] object
13 number //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12, 13 ]
14 number //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12, 13, 14 ]
15 number //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12, 13, 14, 15 ]
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
console.log(flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2))
n = 2

[ 1, 2, 3 ] object
1 number //[ 1 ]
2 number //[ 1, 2 ]
3 number //[ 1, 2, 3 ]

[ 4, 5, 6 ] object
4 number //[ 1, 2, 3, 4 ]
5 number //[ 1, 2, 3, 4, 5 ]
6 number //[ 1, 2, 3, 4, 5, 6 ]

[ 7, 8, [ 9, 10, 11 ], 12 ] object
7 number //[ 1, 2, 3, 4, 5, 6, 7 ]
8 number //[ 1, 2, 3, 4, 5, 6, 7, 8 ]

[ 9, 10, 11 ] object
9 number //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
10 number //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
11 number //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
12 number //[ 1,  2, 3, 4, 5, 6,  7, 8, 9, 10, 11, 12 ]

[ 13, 14, 15 ] object
13 number //[ 1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13 ]
14 number //[ 1,  2, 3,  4,  5,  6, 7,  8, 9, 10, 11, 12, 13, 14 ]
15 number //[ 1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15 ]
</pre> */
