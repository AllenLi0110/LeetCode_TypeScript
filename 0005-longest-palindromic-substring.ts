//Blog:http://allenliservice.online/leetcode-js-5-longest-palindromic-substring/

// <strong>solution:</strong>
// 1. 判斷 s 為空時，回傳 ""。
// 2. 定義 start 為 0，maxLength 為 1。
// 3. 建立擴展中心的函式，從字串中心來查找回文子串長度。
// 4. 遍歷每個字串，並且分別檢查奇數和偶數長度的情況。
// 5. 遍歷過程中不斷更新最長的字串長度。
// 6. 最終返回最長的字串長度。

// <strong>Code 1: BigO(n^2) Sliding Window</strong>
https: function longestPalindrome(s: string): string {
  if (s.length < 1) return "";
  let start: number = 0;
  let maxLength: number = 1;

  const expandFromCenter = (left: number, right: number): number => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    let len1: number = expandFromCenter(i, i);
    let len2: number = expandFromCenter(i, i + 1);
    let currentMaxLength = Math.max(len1, len2);

    if (currentMaxLength > maxLength) {
      maxLength = currentMaxLength;
      start = i - Math.floor((currentMaxLength - 1) / 2);
    }
  }
  return s.substring(start, start + maxLength);
}
