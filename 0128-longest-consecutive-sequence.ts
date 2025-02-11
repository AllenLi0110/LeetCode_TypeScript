//Blog:http://allenliservice.online/leetcode-js-128-longest-consecutive-sequence/

// <strong>solution:</strong>
// 1. 先判斷如果 nums = [] 時，因為沒有連續元素，所以需回傳長度等於 0。
// 2. 運用 Set 來去除重複數值 O(n)，且 Set.has() 方法查找時間複雜度為 O(1)。
// 3. 初始化最大值的長度為 maxLength = 0。
// 4. 遍歷 numSet 陣列
// 5. 如果 num - 1 存在 numSet 中，說明 num 不是連續陣列的起點，跳過該數字。
// 6. 如果 num - 1 不存在 numSet 中，從 num 開始查看連續的數字 num + 1, num + 2 是否存在 numSet 中。
// 7. 更新 maxLength，並選擇當前長度 i 與 maxLength 中的最大者。
// 8. 回傳最大連續序列的長度。
// Summary: 通過遍歷 Set 中的每個數字，檢查它是否是連續序列的起點，然後計算出該序列的長度，最終返回最大的連續序列長度。

// <strong>Code 1: BigO(n)</strong>
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  const numSet: Set<number> = new Set(nums);
  let maxLength: number = 0;
  for (const num of numSet) {
    if (numSet.has(num - 1)) {
      continue;
    }
    let i: number = 0;
    while (numSet.has(num + i)) {
      i++;
    }
    maxLength = Math.max(i, maxLength);
  }
  return maxLength;
}
