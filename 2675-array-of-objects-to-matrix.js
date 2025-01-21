//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day19-2675-array-of-objects-to-matrix/

// <strong>solution:</strong>
// 建立一個 jsonToMatrix 函式，負責將一個包含 JSON 對象的陣列轉換成矩陣的形式。
// <pre style='background-color:#ggg'>
// 1. 宣告一個空的 Set() 物件叫做 keySet，用來存放所有出現的 key(不重複)。
// 2. 使用遞迴函式將題目給的 arr 依序遍歷後添加到 keySet 中。
// 3. 建立 keys 為運用 Array.form().sort() 後將 keySet 轉成陣列後排序。
// 4. 建立一個陣列 res，並放入 keys。
// 5. 透過 for 迴圈來遍歷 arr 中的每個 obj 元素，並用遞迴的方式取得數值，並放入 keyToVal 物件中，
//    如果 keyToVal 不存在值，則添加空字串。最後將 row 推到 res 中，並回傳 res。
//
// - getKeys(obj, path): 透過呼叫 JSON 物件中的 key，如後面仍有物件，則做 a.b 的處理。
// - getValues(obj, path, keyToVal): 呼叫 JSON 物件中的 value，如後面仍有物件，則做 a.b 的處理。
// - isObject(obj): 用於檢查是否為空物件，因 null 的型別為 object，故作 obj !== null && typeof obj === "object" 嚴謹的辨識。
// </pre>

// <strong>Code 1: Matrix BigO(n)</strong>
var jsonToMatrix = function (arr) {
  const keySet = new Set();

  for (const obj of arr) {
    getKeys(obj, "");
  }

  const keys = Array.from(keySet).sort();
  const res = [keys];

  for (const obj of arr) {
    const keyToVal = {};
    getValues(obj, "", keyToVal);
    let row = [];
    for (const key of keys) {
      if (key in keyToVal) {
        row.push(keyToVal[key]);
      } else {
        row.push("");
      }
    }
    res.push(row);
  }
  return res;

  function getKeys(obj, path) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(obj[key])) {
        getKeys(obj[key], newPath);
      } else {
        keySet.add(newPath);
      }
    }
  }

  function getValues(obj, path, keyToVal) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(obj[key])) {
        getValues(obj[key], newPath, keyToVal);
      } else {
        keyToVal[newPath] = obj[key];
      }
    }
  }

  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
console.log(jsonToMatrix([
  {"b": 1, "a": 2},
  {"b": 3, "a": 4}
]))

// Output:
// [
//   ["a", "b"],
//   [2, 1],
//   [4, 3]
// ]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
console.log(jsonToMatrix([
  {"a": 1, "b": 2},
  {"c": 3, "d": 4},
  {}
]))

// Output: 
// [
//   ["a", "b", "c", "d"],
//   [1, 2, "", ""],
//   ["", "", 3, 4],
//   ["", "", "", ""]
// ]
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
console.log(jsonToMatrix([
  {"a": {"b": 1, "c": 2}},
  {"a": {"b": 3, "d": 4}}
]))

// Output: 
// [
//   ["a.b", "a.c", "a.d"],
//   [1, 2, ""],
//   [3, "", 4]
// ]
</pre>

<strong>Example 4</strong>
<pre style='background-color:#ggg'>
console.log(jsonToMatrix([
  [{"a": null}],
  [{"b": true}],
  [{"c": "x"}]
]))

// Output: 
// [
//   ["0.a", "0.b", "0.c"],
//   [null, "", ""],
//   ["", true, ""],
//   ["", "", "x"]
// ]
</pre>

<strong>Example 5</strong>
<pre style='background-color:#ggg'>

console.log(jsonToMatrix([
  {},
  {},
  {},
]))

// Output: 
// [
//   [],
//   [],
//   [],
//   []
// ]
</pre> */
