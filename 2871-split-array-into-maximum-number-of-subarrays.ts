//Blog: https://allenliservice.online/leetcode-ts-2871-split-array-into-maximum-number-of-subarrays/

// <strong>Solution: </strong>
// 題目要求要將陣列切成最多的連續子陣列，
// 而每段 AND 值的加總最小(理想狀況為 0)。
// 如果整段陣列的 AND !== 0，無法切更小只能切一段，
// 如果 AND = 0，我們使用動態規劃 + 位元記錄的方式找到每個元素可以切的位置。
// last[j] 記錄第 j 位（bit）最近出現 0 的位置。
// 對每個元素 nums[i]：
// - 更新每個 bit 的 last[j]。
// - 找出最早可以切段的起點 minIndex = min(last[0..19])。
// - 更新 dp[i]：
//  如果 minIndex == -1 → 無法切 → dp[i] = -1
//  如果 minIndex == 0 或前面無法切 → dp[i] = 1
//  否則 → dp[i] = dp[minIndex - 1] + 1
// 最後回傳：dp[n-1] → 表示最多可以切成的子陣列數。

// <strong>Code 1: BigO(n)</strong>
function maxSubarrays(nums: number[]): number {
    const n = nums.length;
    let [totalAnd] = nums;
    for (const num of nums) {
        totalAnd &= num;
    }

    if (totalAnd !== 0) return 1;

    const dp: number[] = new Array(n).fill(-1);
    const last: number[] = new Array(20).fill(-1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 20; j++) {
            if ((nums[i] & (1 << j)) === 0) {
                last[j] = i;
            }
        }

        let minIndex: number = i;
        for (let j = 0; j < 20; j++) {
            minIndex = Math.min(minIndex, last[j]);
        }

        if (minIndex === -1) {
            dp[i] = -1;
        } else if (minIndex === 0 || dp[minIndex - 1] === -1) {
            dp[i] = 1;
        } else {
            dp[i] = dp[minIndex - 1] + 1;
        }
    }    
    return dp[n - 1];
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,0,2,0,1,2]

i=0, dp=-1, minIndex=-1, last=-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
i=1, dp=1, minIndex=1, last=1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
i=2, dp=1, minIndex=1, last=2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
i=3, dp=2, minIndex=3, last=3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3
i=4, dp=2, minIndex=3, last=3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4
i=5, dp=3, minIndex=4, last=5,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [5,7,1,3]

5 & 7 & 1 & 3
= 5 & 7 → 5
= 5 & 1 → 1
= 1 & 3 → 1

totalAnd !== 0, return -1;
</pre> */