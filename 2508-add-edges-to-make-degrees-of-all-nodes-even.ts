//Blog: https://allenliservice.online/leetcode-ts-2508-add-edges-to-make-degrees-of-all-nodes-even/

// <strong>Solution: </strong>
// 這題一開始看的時候覺得稍微複雜了點，後來從題意中可以了解我們要透過陣列來確認每個節點的邊是否為偶數。也因為我們最多只能新增兩個邊，每條邊只能連接兩個節點，所以當奇數節點超過4 個以上時，我們就沒辦法確保每個節點可以兩個邊，可以提前 return false 處理。
// 1. 我們先記錄節點與邊的關係，
// degree: number[] → 記錄每個節點連了幾條邊，方便找出奇數度數的節點
// (ex. degree = [0, 2, 4, 2, 3, 1]
// hasEdge: Set<number>[] → 記錄每個節點相連的節點，方便檢查是否可以新增邊。
// (ex. hasEdge[2] = {1, 3, 4, 5})
// 2. 找出奇數節點：
// 我們就簡單遍歷一下 n 長度的節點，過程中是奇數的就放到 odds 陣列中。
// 3. 依照奇數節點來處理：
// - 0 個奇數節點：return true。
// - 2 個奇數節點：假設新增一條邊是否符合、假設新增兩條邊是否符合。
// - 4 個奇數節點：嘗試兩兩配對。
// - odd >= 5 個奇數節點：無法配對 return false。


// <strong>Code 1: BigO(m + n)</strong>
function isPossible(n: number, edges: number[][]): boolean {
    const degree: number[] = Array(n + 1).fill(0);
    const hasEdge: Set<number>[] = Array.from({length: n + 1}, () => new Set<number>());

    for (const [u, v] of edges) {
        degree[u]++;
        degree[v]++;
        hasEdge[u].add(v);
        hasEdge[v].add(u);
    }
    
    const odds: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (degree[i] % 2 === 1) odds.push(i);
    }

    if (odds.length === 0) return true;

    if (odds.length === 2) {
        const [a, b] = odds;
        if (!hasEdge[a].has(b)) return true;
        for (let i = 1; i <= n; i++) {
            if (i !== a && i !== b && !hasEdge[i].has(a) && !hasEdge[i].has(b)) {
                return true; 
            }
        }
        return false; 
    }

    if (odds.length === 4) {
        const [a, b, c, d] = odds;
        console.log('Four odd nodes:', a, b, c, d);

        const pair1 = !hasEdge[a].has(b) && !hasEdge[c].has(d);
        const pair2 = !hasEdge[a].has(c) && !hasEdge[b].has(d);
        const pair3 = !hasEdge[a].has(d) && !hasEdge[b].has(c);

        const canFix = pair1 || pair2 || pair3;     
        return canFix;
    }
    return false;
};


/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 5, edges = [[1,2],[2,3],[3,4],[4,2],[1,4],[2,5]]

degree [ 0, 2, 4, 2, 3, 1 ]
hasEdge [
  Set(0) {},
  Set(2) { 2, 4 },
  Set(4) { 1, 3, 4, 5 },
  Set(2) { 2, 4 },
  Set(3) { 3, 2, 1 },
  Set(1) { 2 }
]
odds: [ 4, 5 ]
Can connect 4 and 5 directly → return true
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: n = 4, edges = [[1,2],[3,4]]

degree [ 0, 1, 1, 1, 1 ]
hasEdge [ Set(0) {}, Set(1) { 2 }, Set(1) { 1 }, Set(1) { 4 }, Set(1) { 3 } ]
odds: [ 1, 2, 3, 4 ]
Four odd nodes: 1 2 3 4
Check pairs:
Pair1 (a-b, c-d) valid? false
Pair2 (a-c, b-d) valid? true
Pair3 (a-d, b-c) valid? true
Can fix all four odd nodes? true
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: n = 4, edges = [[1,2],[1,3],[1,4]]

degree [ 0, 3, 1, 1, 1 ]
hasEdge [
  Set(0) {},
  Set(3) { 2, 3, 4 },
  Set(1) { 1 },
  Set(1) { 1 },
  Set(1) { 1 }
]
odds: [ 1, 2, 3, 4 ]
Four odd nodes: 1 2 3 4
Check pairs:
Pair1 (a-b, c-d) valid? false
Pair2 (a-c, b-d) valid? false
Pair3 (a-d, b-c) valid? false
Can fix all four odd nodes? false
</pre> */