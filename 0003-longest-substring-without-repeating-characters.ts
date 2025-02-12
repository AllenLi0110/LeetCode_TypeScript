//Blog:http://allenliservice.online/leetcode-js-0003-longest-substring-without-repeating-characters/

// <strong>solution:</strong>
// 1. 定義 charSet 是一個 Set() 集合，left 為 0，maxLength 為 0。
// 2. 運用 for 迴圈搭配 while 建立 sliding window。
// 3. 依序向右遍歷字串，當發現重複字串時，則 left 向右移動直到移除重複字串。
// 4. 每次窗口大小變動時，更新 maxLength。

// <strong>Code 1: BigO(n) Sliding Window</strong>
function lengthOfLongestSubstring(s: string): number {
  let charSet: Set<string> = new Set();
  let left: number = 0;
  let maxLength: number = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
