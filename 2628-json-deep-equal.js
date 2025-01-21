//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day17-2628-json-deep-equal/

// <strong>solution:</strong>
// 宣告名為 areDeeplyEqual 的函式，用於深度比較兩個物件 o1 和 o2 是否相等：
// <pre style='background-color:#ggg'>
// 1. 檢查 o1 和 o2 是否為 null。如果其中一個為 null，則只有在兩個都是 null 時它們才被視為相等，並回傳 o1 === o2 的結果。
// 2. 檢查 o1 和 o2 的類型是否相同。如果類型不同，則這兩個物件不可能相等，回傳 false。
// 3. 如果 o1 和 o2 都不是 null，且類型相同，則進一步檢查它們是否為基本類型(例如 number、string、boolean等)。如果是基本類型，則比較它們的值是否相等，並回傳比較結果。
// 4. 如果 o1 和 o2 都不是基本類型，則進一步檢查它們是否為陣列。如果其中一個是陣列，則比較它們的序列化後的字串表示形式（使用 String() 函式），如果不相等，則回傳 false。然後用遞迴比較兩個陣列中的每個元素，使用遞迴呼叫 areDeeplyEqual(o1[i], o2[i])，如果有任何一對元素不相等，則回傳 false。
// 5. 如果 o1 和 o2 都不是基本類型且不是陣列，則它們被視為物件。函式首先檢查兩個物件的鍵值對數量是否相同，如果不相同，則回傳 false。然後用遞迴比較兩個對象的每個key-value，使用遞迴呼叫areDeeplyEqual(o1[key], o2[key])，如果有任何一對key-value不相等，則回傳 false。
// 6. 如果以上所有檢查都通過，則 o1 和 o2 被認為是深度相等的，函式回傳 true。
// </pre>

// <strong>Code 1: JSON Deep Equal BigO(1)/BigO(n)</strong>
var areDeeplyEqual = function (o1, o2) {
  if (o1 === null || o2 === null) return o1 === o2;
  if (typeof o1 !== typeof o2) return false;
  if (typeof o1 !== "object") return o1 === o2;

  //Arrays
  if (Array.isArray(o1) || Array.isArray(o2)) {
    if (String(o1) !== String(o2)) {
      return false;
    }

    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) {
        return false;
      }
    }
  } else {
    //Objects
    if (Object.keys(o1).length !== Object.keys(o2).length) {
      return false;
    }

    for (const key in o1) {
      if (!areDeeplyEqual(o1[key], o2[key])) {
        return false;
      }
    }
  }
  return true;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
console.log(areDeeplyEqual({"x":1,"y":2}, {"x":1,"y":2})) //true
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
console.log(areDeeplyEqual({"y":2,"x":1}, {"x":1,"y":2})) //true
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
console.log(areDeeplyEqual({"x":null,"L":[1,2,3]}, {"x":null,"L":["1","2","3"]})) //false
</pre>

<strong>Example 4</strong>
<pre style='background-color:#ggg'>
console.log(areDeeplyEqual(true, false)) //false
</pre> */
