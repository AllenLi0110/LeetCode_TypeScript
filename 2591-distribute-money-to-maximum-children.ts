//Blog: https://allenliservice.online/leetcode-ts-2591-distribute-money-to-maximum-children/

// <strong>Solution: </strong>
// 如果錢少於小孩數量，則回傳 -1，因為不夠分配給每個小孩 1 塊，
// 如果錢多於小孩數量，則分配給每個小孩各 1 塊(題目要求)。
// 上述分配之後，
// 假設每個小孩都拿 8 塊(每人先拿 1 塊，並在領取 7 塊，總共 8 塊)，
// 則答案就是小孩的數量(最多獲得 8 塊的人數)，
// 反之則依序進行分配，
// 第一個小孩領滿 8 元之後，
// 需要判斷錢是否不夠(變負的)，
// 或是最後一個小孩領到 3 塊(原本的 1 塊 + 3 塊 = 4 塊)，
// 則此分配不符合需跳出回圈，不列入計算。

// <strong>Code 1: BigO(n)</strong>
function distMoney(money: number, children: number): number {
    let ans: number = 0;
    if (money < children) return -1;
    money -= children;
    if (children * 7 === money) return children;
    for (let i = 1; i < children; i++) {
        money -= 7;
        if (money < 0 || (money === 3 && i === children - 1)) break;
        ans = i;
    }
    return ans;
};

/*<strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: money = 20, children = 3

money: 20, children: 3
after giving 1 to each child, money left: 17
after giving 7 to child 1, money left: 10
current ans: 1
after giving 7 to child 2, money left: 3
final ans: 1
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: money = 16, children = 2

money: 16, children: 2
after giving 1 to each child, money left: 14
16 - 2 = 14, children * 7 = 14
return children; // 2
</pre> */