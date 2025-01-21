//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day18-2633-convert-object-to-json-string/

// <strong>solution:</strong>
// 自定義一個函式 jsonStringify()，用於將 JavaScript 的物件轉換成 JSON 字串格式。
// 我們先依據 JavaScript 的型別分為 Arrays []、Objects {}、String ""、Booleans、Numbers 分類處理，
// 1. 先檢查傳入的物件是否為 null、undefined，如果是則回傳轉成對應的字串。
// 2. 使用 Array.isArray()來檢查物件是否為陣列，如果是則運用遞迴(再次呼叫jsonStringify(obj))來處理陣列中的每個元素，
//    將每個元素轉乘 JSON 字串，並以逗號區隔開來，再將整個內容用中括號 [] 包裹後回傳。
// 3. 使用 typeof 確認是否為一般物件(非陣列、非基本型別)，如果是則運用遞迴(再次呼叫jsonStringify(obj))來處理每個 key-value，
//    並將字串以逗號區隔開來，再將整個內容用大括號 {} 包裹後回傳。
// 4. 使用 typeof 確認是否為字串，如果是則將字串內容用雙引號 "" 包裹後回傳。
// 5. 最後的狀態剩下 Booleans or Numbers 則轉成字串進行處理後回傳。

// <strong>Code 1: Convert Object to JSON String BigO(n)</strong>
var jsonStringify = function (object) {
  if (object === null || object === undefined) return String(object);

  //Arrays []
  if (Array.isArray(object)) {
    const values = object.map((obj) => jsonStringify(obj));
    return `[${values.join(",")}]`;
  }
  //Objects {}
  if (typeof object === "object") {
    const keys = Object.keys(object);
    const keyValPairs = keys.map(
      (key) => `"${key}":${jsonStringify(object[key])}`
    );
    return `{${keyValPairs.join(",")}}`;
  }
  //Strings ""
  if (typeof object === "string") return `"${String(object)}"`;
  //Booleans or Numbers
  return String(object);
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
console.log(jsonStringify({"y":1,"x":2})) //{"y":1,"x":2}
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
console.log(jsonStringify({"a":"str","b":-12,"c":true,"d":null})) //{"a":"str","b":-12,"c":true,"d":null}
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
console.log(jsonStringify({"key":{"a":1,"b":[{},null,"Hello"]}})) //{"key":{"a":1,"b":[{},null,"Hello"]}}
</pre>

<strong>Example 4</strong>
<pre style='background-color:#ggg'>
console.log(jsonStringify(true)) //true
</pre> */
