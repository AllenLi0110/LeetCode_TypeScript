//Blog:https://allenliservice.online/leetcode-ts-1042-flower-planting-with-no-adjacent/

// <strong>Solution: </strong>
// 這題需要一點圖像的想像力，比如：
// <pre style='background-color:#ggg'>
// 題目說這是雙向路徑，也就是比次相連，如果 花園 1 連到花園 2，那花園 2 一定也連到花園 1。

// 花園 1 <--> 花園 2
//   \           /
//    \         /
//       花園 3

// paths = [[1,2],[2,3],[3,1]]
// edge = [[1, 2], [0, 2], [1, 0]]
// edge[0] = [1, 2] // 花園 1 (index 0) 和 index 1, index 2 的花園有路相連。
// edge[1] = [0, 2] // 花園 2 (index 1) 和 index 0, index 2 的花園有路相連。
// edge[2] = [1, 0] // 花園 3 (index 2) 和 index 1, index 0 的花園有路相連。
// </pre>
// 有了 edge 這個陣列可以幫助我們快速查找花園的鄰居，
// 而每個花園最多只有 3 個鄰居，而花種有 4 中，所以一定可以找到一個合法的話，
// 我們從 1 ~ 4 選一個沒被鄰居使用的花付給該花園。

// <strong>Code 1: BigO(n x m)</strong>
function gardenNoAdj(n: number, paths: number[][]): number[] { 
    const edge: number[][] = Array.from({length: n}, () => []);
    for (const [x, y] of paths) {
        edge[x - 1].push(y - 1);
        edge[y - 1].push(x - 1);
    }
    const ans: number[] = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        const used: Set<number> = new Set();
        for (const nei of edge[i]) {
            if (ans[nei] !== 0) used.add(ans[nei]);
        }
        for (let flower = 1; flower <= 4; flower++) {
            if (!used.has(flower)) {
                ans[i] = flower;
                break;
            }
        }
    }
    return ans;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 3, paths = [[1,2],[2,3],[3,1]]

edge [ [ 1, 2 ], [ 0, 2 ], [ 1, 0 ] ]
ans [ 0, 0, 0 ]
ans [ 1, 0, 0 ]
ans [ 1, 2, 0 ]

return ans; // [ 1, 2, 3 ]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: n = 4, paths = [[1,2],[3,4]]

edge [ [ 1 ], [ 0 ], [ 3 ], [ 2 ] ]
ans [ 0, 0, 0, 0 ]
ans [ 1, 0, 0, 0 ]
ans [ 1, 2, 0, 0 ]
ans [ 1, 2, 1, 0 ]

return ans; // [ 1, 2, 1, 2 ]
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: n = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]

edge [ [ 1, 3, 2 ], [ 0, 2, 3 ], [ 1, 3, 0 ], [ 2, 0, 1 ] ]
ans [ 0, 0, 0, 0 ]
ans [ 1, 0, 0, 0 ]
ans [ 1, 2, 0, 0 ]
ans [ 1, 2, 3, 0 ]

return ans; // [ 1, 2, 3, 4 ]
</pre> */
