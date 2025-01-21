//Blog: https://www.allenliservice.online/leetcode-js-746-min-cost-climbing-stairs/

// <strong>Solution:</strong>
// 1. 宣告 step1 和 step2 分別為 10 和 15。
// 2. 執行 For 迴圈，i 從 2 步驟開始。
// 3. 步驟倆倆比對取最小為 temp。
// 4. 將更新後的 temp 再與下一個步驟成本比較取最小值。
/* <pre style='background-color:#ggg'>
cost: [10, 15, 20] 

+---+---------+--------+--------+
| i | cost[i] | path.1 | path.2 |
+---+---------+--------+--------+
| 0 | 10      | Start  |   -    |
| 1 | 15      | 0 -> 1 | Start  |
| 2 | 20      |   -    |   -    |
| 3 | NULL    | 1 -> 3 | 1 -> 3 |
+---+---------+--------+--------+
cost ---------|10 + 15 |   15   |
              +--------+--------+
</pre> */

// <strong>Code:</strong>
var minCostClimbingStairs = function (cost) {
  let [step1, step2] = cost;

  for (let i = 2; i < cost.length; i++) {
    let temp = Math.min(step1, step2) + cost[i];
    step1 = step2;
    step2 = temp;
  }

  return Math.min(step1, step2);
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: cost = [10,15,20]

step.1
temp = min(10, 15) + cost(2) => 10 + 20 = 30
step1 = step2 //15
step2 = temp //30

return min(step1, step2) = min(15, 30) //15
</pre> */
