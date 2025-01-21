//Blog: https://www.allenliservice.online/leetcode-js-724-find-pivot-index/

// <strong>Solution:</strong>
// 1. 先設定 sum = 0, leftSum = 0。
// 2. 用 for 迴圈，將 nums 中的整數加總。
// 3. 用 for 迴圈，將 sum 逐一扣除 nums 中的整數。
// 4. 同時 if 條件，將 leftSum 與 sum做比對，符合則回傳 i(樞紐值)。
// 5. 如否，則將 leftSum 逐一加入 nums 中的整數。(左邊望大，右邊望小逐一比對)
// 6. 如 for 迴圈執行完沒有提前跳出，則回傳 - 1。

// <strong>Code:</strong>
var pivotIndex = function (nums) {
  let sum = 0,
    leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];

    if (leftSum === sum) return i;
    leftSum += nums[i];
  }
  return -1;
};

/*< strong > Example 1</strong >
<pre style='background-color:#ggg'>
Input: nums = [1,7,3,6,5,6]
sum = 0, leftSum = 0
sum = 1 + 7 + 3 + 6 + 5 + 6 => 28

step.1
i = 0
sum -= nums[i] = 28 - 1 => 27
leftSum === sum => 0 !== 27
leftSum += nums[i] => 0 + 1 = 1

step.2
i = 1
sum -= nums[i] = 27 - 7 => 20
leftSum === sum => 1 !== 20
leftSum += nums[i] => 1 + 7 = 8

step.3
i = 2
sum -= nums[i] = 20 - 3 => 17
leftSum === sum => 1 !== 17
leftSum += nums[i] => 8 + 3 = 11

step.4
i = 3
sum -= nums[i] = 17 - 6 => 11
leftSum === sum => 11 === 11
return i //i = 3
</pre>*/
