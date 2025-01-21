//Blog:https://www.allenliservice.online/leetcode-js-28-implement-strstr/

//<strong>Solution:</strong>
// 1. if「needle」是空值，回傳0
// 2. if「haystack」是空值或「needle.length」比「haystack.length」大，回傳-1
// 3. for迴圈跑haystack的長度，並運用.slice()帶入neeedle進行比較
// ex.類似excel的MID函式，而.substr()會取陣列起點值，.substring()會取陣列終點值。
// (A1 = ABCDEF; =MID(A1,2,1); B )
// 4.正確回傳陣列起點值，錯誤回傳-1

// <strong>Code 1: BigO(n * m)</strong>
var strStr = function (haystack, needle) {
  if (!needle) return -1;
  if (!haystack || needle.length > haystack.length) return -1;

  for (i = 0; i < haystack.length; i++) {
    let str = haystack.substr(i, needle.length);
    if (str === needle) return i;
  }
  return -1;
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
needle.length = 2 //"ll"的長度為兩個字串
step.1
haystack = "hello"
i = 0
str = haystack.length(0, 2) => "he" !== "ll"

step.2
i = 1
str = haystack.length(1, 2) => "el" !== "ll"

step.3
i = 2
str = haystack.length(1, 2) => "ll" === "ll"
return i // i = 2
</pre> */

// <strong>Code 2: Big O(n * m)</strong>
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// <strong>Code 3: Big O(n * m)</strong>
const strStr = (haystack, needle) => haystack.search(needle);

// <strong>Code 4: Big O(n * m)</strong>
var strStr = function (haystack, needle) {
  return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
};

// <strong>Code 5: BigO(n * m)</strong>
var strStr = function (haystack, needle) {
  if (!needle) return -1;
  if (!haystack || needle.length > haystack.length) return -1;

  for (i = 0; i < haystack.length; i++) {
    let str = haystack.substr(i, needle.length);
    if (str === needle) return i;
  }
  return -1;
};
