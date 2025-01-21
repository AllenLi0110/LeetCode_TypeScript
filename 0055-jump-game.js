//Blog:https://www.allenliservice.online/leetcode-js-55-jump-game/

// <strong>solution:</strong>;
// 1. 初始化陣列長度 n。
// 2. 創建一個長度為 n 的陣列 dp 且所有值為 false。這個 dp 陣列將用來記錄每一個位置是否可以到達。
// 3. 設定 dp[0] 為 true，因為我們最初位於陣列的第一個位置。
//    開始遍歷 nums 陣列。
//    若當前位置 i 可以被到達（即 dp[i] 為 true），則開始計算該位置可以跳躍的範圍。
//    使用內部的 for 迴圈遍歷從 1 到 nums[i] 的所有值（即可以跳的距離）。
//    只要該跳躍不超出陣列的範圍，就將目標位置 i + jump 的 dp 值設定為 true。
// 最後返回 dp 陣列的最後一個值，即 dp[n - 1]。如果其值為 true，則表示可以到達最後一個位置，否則表示不可以。

// <strong>Code 1: DP</strong>
var canJump = function (nums) {
  let n = nums.length;
  let dp = Array(n).fill(false);
  dp[0] = true;

  for (let i = 0; i < n; i++) {
    if (dp[i]) {
      for (let jump = 1; jump <= nums[i] && i + jump < n; jump++) {
        dp[i + jump] = true;
      }
    }
  }
  return dp[n - 1];
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [2,3,1,1,4]

[ false, false, false, false, false ]

[ true, true, true, false, false ]
[ true, true, true, true, true ]
[ true, true, true, true, true ]
[ true, true, true, true, true ]
[ true, true, true, true, true ]

return true;
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [3,2,1,0,4]

[ false, false, false, false, false ]

[ true, true, true, true, false ]
[ true, true, true, true, false ]
[ true, true, true, true, false ]
[ true, true, true, true, false ]
[ true, true, true, true, false ]

return false;
</pre> */

// <strong>Code 2: Greedy BigO(n)</strong>
var canJump = function (nums) {
  let position = nums.length - 1;

  for (let i = position; i >= 0; i--) {
    if (i + nums[i] >= position) {
      position = i;
    }
  }
  return position === 0;
};
