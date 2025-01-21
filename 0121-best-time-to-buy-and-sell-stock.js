//Blog: https://www.allenliservice.online/leetcode-js-121-best-time-to-buy-and-sell-stock/

// <strong>Solution:</strong>
// 1. 設定 min 為最大值，且起始的 profit 為 0。
// 2. 依序將 prices 陣列中的售價進行比對
// 3. 抓出售價中的最小值，更新為 min，否則略過。
// 4. 更新「當前的利潤」為當前陣列中的售價減去 min，此為利潤。
// 5. 如果「當前的利潤」出現最大值，則更新為 profit。
// 6. 最終回傳最大的 profit。

// <strong>Code 1:</strong>
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];

    let currentProfit = prices[i] - min;
    if (currentProfit > profit) profit = currentProfit;
  }
  return profit;
};

/* < strong > Example 1</strong >
<pre style='background-color:#ggg'>
Input: prices = [7,1,5,3,6,4]
step.1
i = 0
prices[0] < min //7 < Max
min= prices[0] //min = 7
currentProfit = prices[0] - min //7 - 7 = 0
tProfit > profit //0

step.2
i = 1
prices[1] < min //1 < 7
min= prices[1] //min = 1
currentProfit = prices[1] - min //1 - 1 = 0
tProfit > profit //0

step.3
i = 2
prices[2] < min //5 > 1
currentProfit= prices[2] - min //5 - 1 = 4
tProfit > profit //4 > 0
profit = currentProfit //4

step.4
i = 3
prices[3] < min //3 > 1
currentProfit= prices[3] - min //3 - 1 = 2
tProfit > profit //2 < 4

step.5
i = 4
prices[4] < min //6 > 1
currentProfit= prices[4] - min //6 - 1 = 5
tProfit > profit //5 > 4
profit = currentProfit //5

step.6
i = 5
prices[5] < min //4 > 1
currentProfit= prices[5] - min //4 - 1 = 3 
tProfit > profit //3 < 5
return profit //5
</pre> */
