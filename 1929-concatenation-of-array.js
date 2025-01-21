//Blog: https://www.allenliservice.online/leetcode-js-1929-concatenation-of-array/

// <strong>Solution:</strong>
// 1. 建立 ans = []
// 2. 將 for (i < 2) 迴圈執行兩次
// 3. 將 for (j < nums.length)將每個 nums 的元素執行一次，並運用.push() 放入 ans。
// 4. 回傳 ans。

// <strong>Code.1: For Loop (BigO(n^2)</strong>
var getConcatenation = function (nums) {
  let array = [];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < nums.length; j++) {
      array.push(nums[j]);
    }
  }
  return array;
};

/* <strong>Example 1</strong>
Input: nums = [1,2,1]

step.1 
i = 0
ans.push(nums[0]) => [1]
ans.push(nums[1]) => [1, 2]
ans.push(nums[2]) => [1, 2, 1]

step.2
i = 1
ans.push(nums[0]) => [1, 2, 1, 1]
ans.push(nums[1]) => [1, 2, 1, 1, 2]
ans.push(nums[2]) => [1, 2, 1, 1, 2, 1]

return ans //[1, 2, 1, 1, 2, 1] */

// <strong>Code.2: Concat (BigO(n)</strong>
var getConcatenation = function (nums) {
  return nums.concat(nums);
};

// <strong>Code.3: for loop (BigO(n))</strong>
var getConcatenation = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    nums.push(nums[i]);
  }
  return nums;
};
