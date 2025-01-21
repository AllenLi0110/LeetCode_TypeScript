//Blog: https://www.allenliservice.online/leetcode-js-136-single-number/

// <strong>Solution:</strong>
// 1. 如果 nums 中只有一個數值，則返回該數值。
// 2. 宣告一個 box 物件 { }。
// 3. 將 nums 中的數值與次數依序放入 box 物件中。
// 4. 依序尋找物件中數值的次數為 1，回傳該數值。

// <strong>Code 1: BigO(2n) two for loop</strong>
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  let box = {};

  for (let i = 0; i < nums.length; i++) {
    box[nums[i]] = (box[nums[i]] || 0) + 1;
  }

  for (let num in box) {
    if (box[num] === 1) return num;
  }
};

// <strong>Code 2: BigO(n) XOR</strong>
var singleNumber = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[0] ^= nums[i];
  }
  return nums[0];
};

/* <strong>Example 1</strong>
Input: nums = [2, 2, 1]
nums.length = 3
box = {}

step.1
box = { '2': 1 }
box = { '2': 2 }
box = { '1': 1, '2': 1 }

step.2
box = { '1': 1 } = 1, return i //1 */
