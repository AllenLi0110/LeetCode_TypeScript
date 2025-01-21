//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day4-2635-apply-transform-over-each-element-in-array/

// <strong>solution:</strong>
// 因題目希望我們不要使用 map() 的方法，同時又希望回傳的是一個新的陣列，
// 所以這部分我們先宣告一個空陣列叫做 res，接著我們運用 forEach((num, index)) 的方式，
// 將題目給的 arr 中所有的 element 的數值 num 與位置 index，依序放入 fn(num, index)中做運算，
// 且同步放入到新的陣列 res 中，最後回傳結果。

// <strong>Code 1: BigO(n)</strong>
var map = function (arr, fn) {
  const res = [];

  arr.forEach((num, index) => {
    res.push(fn(num, index));
  });
  return res;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }

fn(num)
fn(1) 1 + 1 = 2 res.push(2) //res = [2]
fn(2) 2 + 1 = 3 res.push(3) //res = [2, 3]
fn(3) 3 + 1 = 4 res.push(4) //res = [2, 3, 4]
</pre>

<strong>Example 2</strong>
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }

fn(num, index)
fn(1, 0) 1 + 0 = 1 res.push(1) //res = [1]
fn(2, 1) 2 + 1 = 3 res.push(3) //res = [1, 3]
fn(3, 2) 3 + 2 = 5 res.push(5) //res = [1, 3, 5]
</pre>

<strong>Example 3</strong>
Input: arr = [10,20,30], fn = function constant() { return 42; }

fn(num)
fn(1) return 42 res.push(42) //res = [42]
fn(2) return 42 res.push(42) //res = [42, 42]
fn(3) return 42 res.push(42) //res = [42, 42, 42]
</pre> */
