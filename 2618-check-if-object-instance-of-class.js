//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day25-2618-check-if-object-instance-of-class/

// <strong>solution:</strong>
// 建立 checkIfInstanceOf 函式來確認題目給的 obj 是否存在 classFunction 中。
// 首先我們先檢查 obj 是否為 null 或 undefined，如果是的話，回傳false，因為這兩個型態不會存在 class 中。
// 接著，我們檢查 classFunction 是否為函式的類型，如果不是的話，回傳 false，以此確保傳入的是有效的函式。
// 如果 obj 和 classFunction 都成功通過了兩個判斷式，那就使用 Object 來將 obj 轉成物件，
// 以便使用 instanceof 來檢查是否來自 classFunction。

// <strong>Code 1: BigO(1)</strong>
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined) return false;
  if (typeof classFunction !== "function") return false;
  return Object(obj) instanceof classFunction;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
var func = () => checkIfInstanceOf(new Date(), Date)
console.log(typeof obj, typeof classFunction) //object function
console.log(func()); // true
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
var func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
console.log(typeof obj, typeof classFunction) //object function
console.log(func()); //true
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
var func = () => checkIfInstanceOf(Date, Date)
console.log(typeof obj, typeof classFunction) //function function
console.log(func()); // false
</pre>

<strong>Example 4</strong>
<pre style='background-color:#ggg'>
var func = () => checkIfInstanceOf(5, Number)
console.log(typeof obj, typeof classFunction) //number function 
console.log(func()); //true
</pre>

Other Example
<strong>Example 5</strong>
var func = () => checkIfInstanceOf(0, null)
console.log(typeof obj, typeof classFunction) //number function 
console.log(func()); // false

var func = () => checkIfInstanceOf(null, null)
console.log(typeof obj, typeof classFunction) //object function 
console.log(func()); // false

var func = () => checkIfInstanceOf([], null)
console.log(typeof obj, typeof classFunction) //object function 
console.log(func()); // false

var func = () => checkIfInstanceOf([], Object)
console.log(typeof obj, typeof classFunction) //object function 
console.log(func()); // true
</pre> */
