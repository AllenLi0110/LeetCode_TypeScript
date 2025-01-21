//Blog: https://www.allenliservice.online/leetcode-js-561-array-partition/

// <strong>solution:</strong>
// 1. 宣告 sum 為 0，以便後續加總。
// 2. 運用 sort((a, b) => a - b)進行陣列的升冪排序。
// 3. 運用 for 迴圈搭配 i += 2 的方式，抓取每兩個中的最小值進行加總。
// <pre style='background-color:#ggg'>
// [1,2,3,4,5,6]
//  0   2   4
// </pre>
// 4. 回傳 sum。

// <strong>Code 1:</strong>
var arrayPairSum = function (nums) {
  let sum = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,4,3,2]

sum = 0
nums.sort => [1,2,3,4]
              0   2  
return sum //1 + 3 = 4
</pre> */
