//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day20-2700-differences-between-two-objects/

// <strong>solution:</strong>
// 宣告一個函式來處理兩個物件的差異：
// 1. 先建立判斷物件的 isObject() function(排除null)。
// 2. 宣告 diff 為空物件，同時運用 for in 迴圈來將 obj2 當作比較的基準。
// 3. 運用 if 判斷式來確認 obj2 物件中是否含有符合的 key。
// 4. 建立 res 為遞迴函式，進行以下判斷與回傳結果：
// 4-1. 判斷 obj1、obj2 兩者皆不是物件，使用三元運算子判斷兩者相同則回傳{}，反之回傳[obj1, obj2]。
// 4-2. 如果 obj1、obj2 其中一個不是物件，則將之放入陣列後回傳[obj1, obj2]。
// 4-3. 如果 obj1、obj2 其中一個不是陣列，則將之放入陣列後回傳[obj1, obj2]。
// 5. 如果遞迴函式回傳有內容的物件，則將 res 放入對應 diff 的 key 位置。
// 6. 回傳 diff 物件。

// <strong>Code 1: BigO(n)</strong>
function objDiff(obj1, obj2) {
  //Example Table
  //+--------------------------+---------------------+------------------------------------+
  //|           obj1           |         obj2        |                res                 |
  //+--------------------------+---------------------+------------------------------------+
  //|            {}            |        "a": 1       |                 {}                 | Example.1
  //|          "a": 1          |        "a": 2       |             {"a": [1, 2]}          | Example.2
  //|      "z":{"a": null}     |      "z":{"a": 2}   |         {"z":{"a": [null, 2]}}     | Example.2
  //| "z":[1, 2, 4, [2, 5, 7]] | "z": [1, 2, 3, [1]] |{"z":{ "2": [4,3],"3":{"0": [2,1]}}}| Example.3
  //|      "a": {"b": 1}       |        "a": [5]     |         {"a": [{"b": 1}, [5]]}     | Example.4
  //|      "a": [1, 2, {}]     |    "a": [1, 2, {}]  |                  {}                | Example.5
  //|      "a": [1, 2, {}]     |        false        |   { a: [ [ 1, 2, {} ], false ] }   | Example.6
  //+--------------------------+---------------------+------------------------------------+

  //both primitive
  if (!isObject(obj1) && !isObject(obj2))
    return obj1 === obj2 ? {} : [obj1, obj2];
  //one primitive
  if (!isObject(obj1) || !isObject(obj2)) return [obj1, obj2];
  //one array, one obj
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2];

  const diff = {};

  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      const res = objDiff(obj1[key], obj2[key]);
      if (Object.keys(res).length > 0) {
        diff[key] = res;
      }
    }
  }
  return diff;

  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
console.log(objDiff({},{
  "a": 1, 
  "b": 2
}))
//{}
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
console.log(objDiff({
  "a": 1,
  "v": 3,
  "x": [],
  "z": {
    "a": null
  }
},{
  "a": 2,
  "v": 4,
  "x": [],
  "z": {
    "a": 2
  }
}))
//{ a: [ 1, 2 ], v: [ 3, 4 ], z: { a: [ null, 2 ] } }
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
console.log(objDiff({
  "a": 5, 
  "v": 6, 
  "z": [1, 2, 4, [2, 5, 7]]
},{
  "a": 5, 
  "v": 7, 
  "z": [1, 2, 3, [1]]
}))
//{ v: [ 6, 7 ], z: { '2': [ 4, 3 ], '3': { '0': [ 2, 1 ] } } }
</pre>

<strong>Example 4</strong>
<pre style='background-color:#ggg'>
console.log(objDiff({
  "a": {"b": 1}, 
},{
  "a": [5],
}))
//{ a: [ { b: 1 }, [ 5 ] ] }
</pre>

<strong>Example 5</strong>
<pre style='background-color:#ggg'>
console.log(objDiff({
  "a": [1, 2, {}], 
  "b": false
},{   
  "b": false,
  "a": [1, 2, {}]
}))
//{}
</pre> */
