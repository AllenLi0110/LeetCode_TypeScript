//Blog:https://www.allenliservice.online/leetcode-js-53-maximum-subarray/

// <strong>Solution:</strong>
// 1. 先設定初始值為 nums[0]
// 2. 有了起點後，運用++i依序往後比較
// 3. 如果下一個 nums 大於 0，則將兩者相將
// 4. 如果下一個 nums 小於 0，則將兩者取最大值
// 5. 回傳結果

// <strong>Code 1:</strong>
var maxSubArray = function (nums: number[]): number {
  let response: number = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    response = Math.max(response, nums[i]);
  }
  return response;
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Array:          0 1  2 3  4 5 6  7 8
Length:         1 2  3 4  5 6 7  8 9
response = nums[0] //-2

step.1
i = 1
nums[i - 1] > 0 => (nums[0] = -2) < 0  //break                                     
response = Math.max(response, nums[i]) => Math.max(-2, -2) 
//response = -2

step.2
i = 2
nums[i - 1] > 0 => (num[1] = 1) > 0                                           -2
nums[i] = nums[2] + nums[2-1] => nums[2] = -3 + 1 = -2  //Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
response = Math.max(response, nums[i]) => Math.max(-2, -2)
//response = -2

step.3
i = 3
nums[i - 1] > 0 => (num[2] = -2) < 0  //break                                     
response = Math.max(response, nums[i]) => Math.max(-2, 4) 
//response = 4

step.4
i = 4
nums[i - 1] > 0 => (num[3] = 4) > 0                                                3
nums[i] = nums[4] + nums[4-1] => nums[4] = -1 + 4 = 3  //Input: nums = [-2,1,-2,4,-1,2,1,-5,4]
response = Math.max(response, nums[i]) => Math.max(4, -3)
//response = 4

step.5
i = 5
nums[i - 1] > 0 => (num[4] = 3) > 0                                                5
nums[i] = nums[5] + nums[5-1] => nums[5] = 2 + 3 = 5  //Input: nums = [-2,1,-2,4,3,2,1,-5,4]
response = Math.max(response, nums[i]) => Math.max(4, 5) 
//response = 5

step.6
i = 6
nums[i - 1] > 0 => (num[5] = 5) > 0                                                   6
nums[i] = nums[6] + nums[6-1] => nums[6] = 1 + 5 = 6  //Input: nums = [-2,1,-2,4,-1,5,1,-5,4]
response = Math.max(response, nums[i]) => Math.max(5, 6) 
//response = 6

step.7
i = 7
nums[i - 1] > 0 => (num[6] = 3) > 0                                                       1
nums[i] = nums[7] + nums[7-1] => nums[7] = -5 + 6 = 1  //Input: nums = [-2,1,-2,4,-1,2,6,-5,4]
response = Math.max(response, nums[i]) => Math.max(6, 1) 
//response = 6

step.8
i = 8
nums[i - 1] > 0 => (num[7] = 1) > 0                                                       5
nums[i] = nums[8] + nums[8-1] => nums[8] = 4 + 1 = 5  //Input: nums = [-2,1,-2,4,-1,2,6,1,4]
response = Math.max(response, nums[i]) => Math.max(6, 5) 
//response = 6

return response = 6
</pre> */

// <strong>Code 2:</strong>  ex.Time Limit Exceeded
var maxSubArray = function (nums: number[]): number {
  let max: number = Math.min(...nums);

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};
