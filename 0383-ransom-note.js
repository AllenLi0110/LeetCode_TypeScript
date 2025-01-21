//Blog: https://www.allenliservice.online/leetcode-js-383-ransom-note/

// <strong>solution:</strong>
// 1. 將 magazine 中的字串轉成陣列放入 array。
// 2. 從 ransomNote中取出每一個字串
// 3. 宣告 index 為 array 中符合 element 的元素位置。
// 4. 如果不存在，indexOf 為 - 1，則 index 為負數跳出迴圈。
// 5. 如果存在，使用 splice 將該元素刪除。
// 6. 如 magazine 中階存在 ransomNote 的元素，則回傳 true。

// <strong>Code 1</strong>
var canConstruct = function (ransomNote, magazine) {
  let array = [...magazine];
  for (const element of ransomNote) {
    const index = array.indexOf(element);
    if (index < 0) return false;
    array.splice(index, 1);
  }
  return true;
};

/* <strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: ransomNote = "aa", magazine = "aab"

index = array.indexOf(a) //0
array.splice(index, 1) //['a']

index = array.indexOf(a) //0
array.splice(index, 1) //['a']

return true;
</pre> */
