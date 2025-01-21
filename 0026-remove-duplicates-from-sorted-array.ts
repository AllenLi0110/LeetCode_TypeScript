//Blog:https://www.allenliservice.online/leetcode-js-26-remove-duplicates-from-sorted-array/

//<strong>Solution:</strong>
//1. 如果nums為無效或空值，則為傳0。
//2. 宣告count為確認次數 = 字串長度。
//3. 「For迴圈」進行陣列中數值倆倆比對。
//<pre style='background-color:#ggg'>
//  count = 0, i = 1
//  [      0,      1,      2]
//  nums[0] nums[1]
//  nums[0]         nums[2]
//</pre>
//4. 「if條件」
//  不相同時count += 1，且變更原陣列的數值。
//  相同時count不變，且依序往後比較數值。
//5. 完成「for回圈」，return count + 1的數值。
//<pre style='background-color:#ggg'>
//  box   = [1, 2, 3]
//  Array =  0  1  2
//  box.length = Array + 1
//</pre>

// <strong>Code 1: BigO(n)</strong>
var removeDuplicates = function (nums: number[]): number {
  if (nums === null || nums.length === 0) return 0;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[count] !== nums[i]) {
      count++;
      nums[count] = nums[i];
    }
  }
  return count + 1;
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
step.1
nums = [      1,      1,      2]
         nums[0] nums[1] 
count = 0

step.2
nums = [      1,      1,      2]
         nums[0]         nums[2] 
count => 0 + 1 = 1
nums[1] = nums[2]
=>nums [      1,      2,      2]

step.3
return ++count => 1 + 1 = 2
</pre> */

// <strong>Code 2: BigO(n)</strong>
var removeDuplicates = function (nums: number[]): number {
  const uniq = new Set(nums);
  const num = Array.from(uniq);

  for (let i = 0; i < nums.length; i++) {
    nums[i] = num[i];
  }
  return num.length;
};
