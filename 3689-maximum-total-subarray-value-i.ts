//Blog: https://allenliservice.online/leetcode-ts-3689-maximum-total-subarray-value-i/

// <strong>solution:</strong>
// 因為我們不知道陣列中的最大、最小值為何，但是我們可以假設 index = 0 為初始值。
// 接著從題目給的敘述，我們發現可以重複選擇同一組子陣列，
// 所以我們可以直接使用數學方法找出最大值與最小值的差，
// 最後就可以將總和乘上題目給的 k 次，即為最大總和。

// <strong>Code 1: BigO(n)</strong>
function maxTotalValue(nums: number[], k: number): number {
    let [maxNum] = nums, [minNum] = nums, result: number = 0

    for (const num of nums) {
        maxNum = Math.max(maxNum, num);
        minNum = Math.min(minNum, num);
        result = Math.max(result, (maxNum - minNum))
    }
    return result * k;
};


/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,3,2], k = 2

maxNum = nums[0] = 1
minNum = nums[0] = 1

maxNum = Math.max(1, 1) -> 1
minNum = Math.min(1, 1) -> 1
result = Math.max(0, (1 - 1)) = 0

maxNum = Math.max(1, 3) -> 3
minNum = Math.min(1, 3) -> 1
result = Math.max(0, (3 - 1)) = 2

maxNum = Math.max(3, 2) -> 3
minNum = Math.min(1, 2) -> 1
result = Math.max(0, (3 - 1)) = 2

return result * k -> 2 * 2 = 4
</pre> */