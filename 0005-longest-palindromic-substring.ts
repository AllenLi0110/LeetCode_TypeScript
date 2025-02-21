//Blog:http://allenliservice.online/leetcode-js-5-longest-palindromic-substring/

// <strong>solution:</strong>

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
