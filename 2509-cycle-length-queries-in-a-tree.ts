//Blog: https://allenliservice.online/leetcode-ts-2509-cycle-length-queries-in-a-tree/

// <strong>Solution: </strong>
// 因為結果要陣列表示，我們建立 res 這個空陣列。
// 接下來我們遍歷 queries 中 query 節點的起點跟終點，
// 每個 query 我們暫時新增一個邊，長度為 1，
// 透過 while() 回圈往上走，直到 u, v 兩個相遇，
// 如果 u < v，則把 v 移到他的父節點(題目說明是二元樹，所以除以 2)，
// 否則把 u 移到他的父節點，
// 且每走一步就 cycleLength + 1。
// 當 u, v 相遇的時候，把計算好的 cycleLength 放到 res 陣列中。
// 遍歷完所有的 queries 後，回傳 res。

// <strong>Code 1: BigO(m * log n)</strong>
function cycleLengthQueries(n: number, queries: number[][]): number[] {
    let res: number[] = []
    for (let [u, v] of queries) {
        let cycleLength: number = 1;
        while (u !== v) {
            if (u < v) {
                v = Math.floor(v / 2);
            } else {
                u = Math.floor(u / 2);
            }
            cycleLength++;
        }
        res.push(cycleLength);
    }
    return res;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 3, queries = [[5,3],[4,7],[2,3]]

Processing query: 5 3
u: 5 v: 3
cycleLength now: 2
u: 2 v: 3
cycleLength now: 3
u: 2 v: 1
cycleLength now: 4
Query [5, 3] result: 4

Processing query: 4 7
u: 4 v: 7
cycleLength now: 2
u: 4 v: 3
cycleLength now: 3
u: 2 v: 3
cycleLength now: 4
u: 2 v: 1
cycleLength now: 5
Query [4, 7] result: 5

Processing query: 2 3
u: 2 v: 3
cycleLength now: 2
u: 2 v: 1
cycleLength now: 3
Query [2, 3] result: 3

Final result array: [ 4, 5, 3 ]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: n = 2, queries = [[1,2]]

Processing query: 1 2
u: 1 v: 2
cycleLength now: 2
Query [1, 2] result: 2

Final result array: [ 2 ]
</pre> */