//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day30-2649-nested-array-generator/

// <strong>solution:</strong>
// 定義一個 inorderTraversal (function*)生成器函式，以 arr 陣列作為參數：
// 運用遞迴方法來遍歷陣列中的元素，並按照中序 (in-order) 的排列方式回傳結果。
// 1-1. 檢查 arr 的長度是否為 0。如果是，則使用 yield [] 產生一個空陣列。這表示在沒有任何元素的情況下，生成器會產生一個空陣列並結束。
// 1-2. 如果 arr 不是空的，則進入 for...of 迴圈，遍歷 arr 中的每個元素。
// 2-1. 檢查目前的元素 element 是否為陣列。如果是，則進行遞迴的處理。透過使用 yield* inorderTraversal(element)，將控制權委派給另一個 inorderTraversal 生成器以處理子陣列。
// 2-2. 如果 element 不是陣列，則使用 yield element 產生該元素。這表示生成器會產生一個單獨的元素。
// 3. 遞迴過程會重複執行，直到所有的元素都被遍歷完畢。最後，生成器會結束並不再產生任何值。

// <strong>Code 1: InorderTraversal function* BigO(n)</strong>
var inorderTraversal = function* (arr) {
  if (arr.length === 0) yield [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      //recursion
      yield* inorderTraversal(element);
    } else {
      yield element;
    }
  }
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
const gen = inorderTraversal([[[6]],[1,3],[]])
console.log(gen.next().value); //6
console.log(gen.next().value); //1
console.log(gen.next().value); //3
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
const gen = inorderTraversal([])
console.log(gen.next().value); //[]
</pre> */
