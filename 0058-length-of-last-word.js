//Blog:https://allenliservice.online/leetcode-js-58-length-of-last-word-2/

// <strong>Solution:</strong>
// 1. 運用.trim()移除字串中，字首前、字尾後的空白。
// 2. 使用.split(' ')來將字串以空白做切割為陣列。
// 3. 注意陣列與數列的關係。
// ex.
//   word = [a, b, c]
//   array   0  1  2

// <strong>Code 1: BigO(n)</strong>
var lengthOfLastWord = function (s) {
  let array = s.split(/\s/);

  if (s.length === 0) return 0;
  if (array.length === 0) return 0;

  while (array.length > 0) {
    let lastWord = array.pop();
    if (lastWord.length > 0) return lastWord.length;
  }
  return 0;
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
step.1
string    1        2
arr = ['Hello', 'World']
array     0        1
arr.length = 2
return arr[arr.length - 1].length 
//arr[1].length => 'World'.length => 5

</pre> */

// <strong>Code 2: BigO(n)</strong>
var lengthOfLastWord = function (s) {
  const arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

// <strong>Code 3: BigO(n)</strong>
var lengthOfLastWord = function (s) {
  if (s.length === 0) return 0;
  let arr = s.trim().split(" ");

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length > 0) {
      return arr[i].length;
    }
  }
};

// <strong>Code 3: BigO(n)</strong>
var lengthOfLastWord = function (s) {
  let array = s.trim().split(/\s/);
  return array[array.length - 1].length;
};
