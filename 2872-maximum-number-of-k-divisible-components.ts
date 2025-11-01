//Blog:https://allenliservice.online/leetcode-ts-2872-maximum-number-of-k-divisible-components/

// <strong>Solution: </strong>
// 我們先建立樹的鄰接表，接著 DFS 遍歷整棵樹，
// 其中我們判斷子樹能不能被 k 整除，
// 如果可以則表示這個子樹可以切成一個有效的元件，
// 我們做 ans++。
// 當 DFS 跑完之後的 ans 就會是可以切出最大 k 可整除的子樹數量。

// <strong>Code 1: BigO(n)</strong>
function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
    const graph: number[][] = Array.from({length: n}, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const sum: number[] = new Array(n).fill(0);
    let ans: number = 0;

    function dfs(v: number, parent: number) {
        for (const u of graph[v]) {
            if (u !== parent) {
                dfs(u, v);
                sum[v] += sum[u];
                sum[v] %= k;
            }
        }
        sum[v] += values[v];
        sum[v] %= k;
        if (sum[v] === 0) {
            ans++;
        }
    }
    dfs(0, -1);
    return ans;
};

/*<strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 5, edges = [[0,2],[1,2],[1,3],[2,4]], values = [1,8,1,4,4], k = 6

Node 3 sum [ 0, 0, 0, 4, 0 ] ans 0
Node 1 sum [ 0, 0, 0, 4, 0 ] ans 0
Node 1 ans 1
Node 4 sum [ 0, 0, 0, 4, 4 ] ans 1
Node 2 sum [ 0, 0, 5, 4, 4 ] ans 1
Node 0 sum [ 0, 0, 5, 4, 4 ] ans 1
Node 0 ans 2
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: n = 7, edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], values = [3,0,6,1,5,2,1], k = 3

Node 3 sum [
  0, 0, 0, 1,
  0, 0, 0
] ans 0
Node 4 sum [
  0, 1, 0, 1,
  2, 0, 0
] ans 0
Node 1 sum [
  0, 0, 0, 1,
  2, 0, 0
] ans 0
Node 1 ans 1
Node 5 sum [
  0, 0, 0, 1,
  2, 2, 0
] ans 1
Node 6 sum [
  0, 0, 2, 1,
  2, 2, 1
] ans 1
Node 2 sum [
  0, 0, 0, 1,
  2, 2, 1
] ans 1
Node 2 ans 2
Node 0 sum [
  0, 0, 0, 1,
  2, 2, 1
] ans 2
Node 0 ans 3
</pre> */
