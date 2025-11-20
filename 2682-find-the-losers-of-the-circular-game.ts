//Blog: https://allenliservice.online/leetcode-ts-2682-find-the-losers-of-the-circular-game/

//  <strong>Solution: </strong>
//  我們宣告 visited 來存放已經拿到球的玩家，
// 接著 current 代表目前拿到球的玩家，且從 1 號玩家開始，
// 而 turn 則代表第幾次的傳球。
// 我們執行 while 直到玩家重複被選到，
// 過程中計算下一個拿球的玩家，
// 直到球傳到已經拿過的人為止。
// 最後就是找出沒有拿過球的人放到 losers，
// 回傳 losers。

// <strong>Code 1: BigO(n)</strong>
function circularGameLosers(n: number, k: number): number[] {
    const visited: Set<number> = new Set();
    let current: number = 1;
    let turn: number = 1;

    while(!visited.has(current)) {
        visited.add(current);
        current = (current + turn * k - 1) % n + 1;
        turn++;
    }
    const losers: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (!visited.has(i)) losers.push(i);
    }
    return losers;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 5, k = 2

Turn 1: player 1
Turn 2: player 3
Turn 3: player 2
Loop ends at player 3
Losers: [4,5]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: n = 4, k = 4

Turn 1: player 1
Loop ends at player 1
Losers: [2,3,4]
</pre> */