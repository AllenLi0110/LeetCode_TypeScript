//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day11-2621-sleep/

// <strong>solution:</strong>
// 題目需要我們寫一個非同步的函式，且提供需延遲設定的秒數當作 input 傳入這個函式中，
// 我們先運用 return new Promise() 來回傳新的非同步函示，
// 接著我們將 resolve, millis 依序放入 setTimeout 中，
// 當 millis 秒數結束時呼叫 resolve 來結束 Promise，
// 以此達到延遲的功能。

// <strong>Code 1: BigO(1)</strong>
async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
let t = Date.now()
sleep(200).then(() => console.log(Date.now() - t)) // 200
</pre> */
