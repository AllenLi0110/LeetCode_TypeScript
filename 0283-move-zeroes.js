//Blog: http://allenliservice.online/leetcode-js-283-move-zeroes/

// <strong>Solution:</strong>
// 1. 宣告 index = 0。
// 2. 執行 i 長度的迴圈。
// 3. 如果陣列中的數值不是 0，則前後交換位置。
// 4. 如果 i 是 0 的話，則不變動，往下搜尋，並由 index 來將 0 替換至後方。
// 5. 回傳 nums。

// <strong>Code 1: BigO(n)</strongc>
var moveZeroes = function (nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      index++;
    }
  }

  return nums;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: nums = [0,1,0,3,12]
i, index, nums[i], nums[index]

0 0 0 0
1 0 1 0
2 1 0 0
3 1 3 0
4 2 12 0
[ 1, 3, 12, 0, 0 ]
*/

// <strong>Code 2: BigO(n^2)</strongc>
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0) {
        let box = nums[i];
        nums[i] = nums[j];
        nums[j] = box;
      }
    }
  }
  return nums;
};
