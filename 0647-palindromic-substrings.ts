//Blog:http://allenliservice.online/leetcode-js-5-longest-palindromic-substring/

// <strong>solution:</strong>
// 1. 定義 count 變數。
// 2. 建立中心擴展的函式，符合 palindromic 判斷條件的時候，count加一。
// 3. 遍歷 s 字串長度的迴圈，依對應次數呼叫中心擴展函式。
// 4. 回傳 count。

// <strong>Code 1: BigO(n^2) Expand Around Center </strong>
function countSubstrings(s: string): number {
  let count: number = 0;

  const expandAroundCenter = (left: number, right: number): void => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return count;
}
