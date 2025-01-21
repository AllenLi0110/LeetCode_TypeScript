//Blog: https://allenliservice.online/leetcode-javascript-30-days-challenge-day6-2626-array-reduce-transformation/

// <strong>solution:</strong>
// 老樣子，題目希望我們不要使用 reduce() 的方法，同時又希望回傳的是一個新的陣列，
// 但是這個說明應該有誤，最後應該是回傳最終值。
// 我們可以運用 forEach 來執行 nums 陣列中的每個 num(element)，
// 接著將 init 的數值透過 fn(init, num) 來做累加的計算，
// 並將最終值回傳出來。

// <strong>Code 1: BigO(n)</strong>
var reduce = function (nums, fn, init) {
  nums.forEach((num) => {
    init = fn(init, num);
  });
  return init;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0

fn(init, num) = return 0 + 1 = 1
fn(init, num) = return 0 + 2 = 3
fn(init, num) = return 0 + 3 = 6
fn(init, num) = return 0 + 4 = 10
</pre>

<strong>Example 2</strong>
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100

fn(init, num) = return 100 + 1*1 = 101
fn(init, num) = return 101 + 2*2 = 105
fn(init, num) = return 105 + 3*3 = 114
fn(init, num) = return 114 + 4*4 = 130
</pre>

<strong>Example 3</strong>
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25

fn(init, num) = return 0 => return init //25
ex. nums為空陣列，該 forEach 沒有任何元素可以執行，故僅執行最後的 return init。
</pre> */
