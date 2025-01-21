//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day13-2636-promise-pool/

// <strong>solution:</strong>
// 宣告 queue 為一個新的 set() 物件用於儲存正在執行的任務，同時 resolved 陣列用於儲存已完成的任務的結果。
// 將 functions 中的 task 依序存放到 queue 中，同時將 res 放入 resolved 並從 queue 中刪除任務。
// 檢查目前正在執行的 task 數量，如果已達到設定的最大數量「n」，則使用「await Promise.race(queue)」等待任一個任務完成。
// 最後使用「await Promise.all(queue)」將等待所有剩餘的 task 完成。
// 回傳儲存了所有完成任務結果的「resolved」陣列。

// <strong>Code 1: BigO(n)</strong>
var promisePool = async function (functions, n) {
  //使用 Set() 來儲存正在執行的任務
  let queue = new Set(),
    resolved = [];

  for (const task of functions) {
    //將正在執行的任務加入隊列中
    const x = task().then((res) => {
      //任務執行完成後放入resolved
      resolved.push(res);
      //完成後移除正在執行的列隊中
      queue.delete(x);
    });
    queue.add(x);
    //控制執行的最大數量
    if (queue.size >= n) {
      await Promise.race(queue);
    }
  }
  //執行完所有任務後才回傳執行結果
  await Promise.all(queue);
  return resolved;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
n = 2
Promise.race(() => new Promise(res => setTimeout(res, 300))) //300
Promise.race(() => new Promise(res => setTimeout(res, 400))) //400

Promise.all(() => new Promise(res => setTimeout(res, 200))) //300 + 200 = 500

Output: [[300,400,500],500]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
n = 5
Promise.all(() => new Promise(res => setTimeout(res, 300))) //300
Promise.all(() => new Promise(res => setTimeout(res, 400))) //400
Promise.all(() => new Promise(res => setTimeout(res, 200))) //200

Output: [[300,400,200],400]
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
n = 1
Promise.race(() => new Promise(res => setTimeout(res, 300))) //300
Promise.race(() => new Promise(res => setTimeout(res, 400))) //300 + 400 = 700
Promise.race(() => new Promise(res => setTimeout(res, 200))) //700 + 200 = 900

Output: [[300,700,900],900]
</pre> */
