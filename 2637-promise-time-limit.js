//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day12-2637-promise-time-limit/

// <strong>solution:</strong>
// 以 Example 1 為例，呼叫 limited() 函式後，
// 進入到 timeLimit() 中建立一個含有 setTimeout() 的 new Promise()，
// 如果時間經過 t 豪秒後會執行 reject("Time Limit Exceeded")。
// 而 fn 函式放入 ...args，並等待 100 豪秒後回傳 n * n，
// 此時因為超過 50 豪秒的時間限制，而 .catch(console.log) 抓取到 reject 的結果，
// 故回傳("Time Limit Exceeded")訊息。
// ex.如果 fn(...args) 提前完成，則需取消 id 的限時函式。

// <strong>Code 1: BigO(n)</strong>
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const id = setTimeout(() => reject("Time Limit Exceeded"), t);
      fn(...args)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
        .finally(() => clearTimeout(id));
    });
  };
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
const limited = timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 50);
limited(5).catch(console.log); // "Time Limit Exceeded" at t=50ms
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
const limited = timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 150);
limited(5).then(console.log).catch(console.log); // return 25 at t=100ms
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
const limited = timeLimit(async (a, b) => {
  await new Promise((res) => setTimeout(res, 120));
  return a + b;
}, 150);
limited(5, 10).then(console.log).catch(console.log); // return 15 at t=120ms
</pre>

<strong>Example 4</strong>
<pre style='background-color:#ggg'>
const limited = timeLimit(async () => {
  throw "Error";
}, 1000);
limited().then(console.log).catch(console.log); // "Error" at t=0ms
</pre> */
