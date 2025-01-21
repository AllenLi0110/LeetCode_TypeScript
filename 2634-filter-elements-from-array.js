//Blog: https://allenliservice.online/leetcode-javascript-30-days-challenge-day5-2634-filter-elements-from-array/

// <strong>solution:</strong>
// 因題目希望我們不要使用 filter() 的方法，同時又希望回傳的是一個新的陣列，
// 所以這部分我們先宣告一個空陣列叫做 res，接著我們運用 forEach((num, index)) 的方式，
// 將題目給的 arr 中所有的 element 的數值 num 與位置 index，依序放入 fn(num, index)中做運算，
// 且同步運用 if條件來判斷 fn 回傳的結果是否為真值。(ex. false、undefined、null、0、NaN、""，以上皆非真值)
// 最後將符合條件的真值放入到新的陣列 res 中，並回傳結果。

// <strong>Code 1: BigO(n)</strong>
var filter = function (arr, fn) {
  const res = [];

  arr.forEach((num, index) => {
    if (fn(num, index)) {
      res.push(num);
    }
  });
  return res;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }

if (0 > 10) res.push(0) //res = []
if (10 > 10) res.push(10) //res = []
if (20 > 10) res.push(20) //res = [20]
if (30 > 10) res.push(30) //res = [20, 30]
</pre>

<strong>Example 2</strong>
Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }

n = element
i = index

if (return 0 === 0) res.push(1) //res = [1]
if (return 1 === 0) res.push(2) //res = [1]
if (return 2 === 0) res.push(3) //res = [1]
</pre>

<strong>Example 3</strong>
Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }

if (return n + 1) res.push(-2) //res = [-2]
if (return n + 1) res.push(-1) //res = [-2] (-1 + 1 = 0, 0 為非真值, 故if(false){不執行條件內容})
if (return n + 1) res.push(0) //res = [-2, 0]
if (return n + 1) res.push(1) //res = [-2, 0, 1]
if (return n + 1) res.push(2) //res = [-2, 0, 1, 2]
</pre> */
