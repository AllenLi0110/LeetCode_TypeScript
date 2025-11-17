//Blog: https://allenliservice.online/leetcode-ts-2642-design-graph-with-shortest-path-calculator/

// <strong>Solution: </strong>
// 我們先在 Graph class 裡面建立 private 的 n(0 ~ n -1 個節點數量)，
// 以及 dis(distance) 的數值陣列。
// 接著我們建立一個 n x n 的陣列，初始值假設為最大的安全值，
// 以及 dis 中自己到自己的距離為 0，接著就可以把例子中的初始陣列填入，
// 我們透過 Floyd-Warshall 對每個節點檢查最短的路徑，
// 這樣就完成了我們的 constructor。
// 在建立 addEdge 時，我們需要新增一條邊 from -> to (cost)，
// 因為我們建構子時有跑過最短的距離，所以 dis[i][from] 與 dis[to][j] 再加上 cost，
// 就可以和原有的 dis[i][j] 比較取最小值。
// 再來就是 shortestPath() 的部分，我們從 dis 讀出 node1 -> node2。
// 如果是 INF ，則回傳 -1，表示不可達到，如不是 INF，則回傳距離。

// <strong>Code 1: BigO(n ^ 3)</strong>
class Graph {
    private n: number;
    private dis: number[][];

    constructor(n: number, edges: number[][]) {
        const INF = Infinity;
        this.n = n;
        this.dis = Array.from({length: n}, () => Array(n).fill(INF));
        for (let i = 0; i < n; i++) {
            this.dis[i][i] = 0;
        }    
        for (const edge of edges) {
            const [from, to, cost] = edge;
            this.dis[from][to] = Math.min(this.dis[from][to], cost);
        }
        // Floyd-Warshall
       for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (let k = 0; k < n; k++) {
                    this.dis[j][k] = Math.min(this.dis[j][k], this.dis[j][i] + this.dis[i][k]);
                }
            }
        }
    }

    addEdge(edge: number[]): void {
        const INF = Infinity;
        const [from, to, cost] = edge;         
        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n; j++) {
                this.dis[i][j] = Math.min(
                    this.dis[i][j],
                    this.dis[i][from] + cost + this.dis[to][j]
                );
            }
        }
    }

    shortestPath(node1: number, node2: number): number {
        const INF = Infinity;
        return this.dis[node1][node2] === INF ? -1 : this.dis[node1][node2];
    }
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input
["Graph", "shortestPath", "shortestPath", "addEdge", "shortestPath"]
[[4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]]], [3, 2], [0, 3], [[1, 3, 4]], [0, 3]]

Initial distance matrix:
	Node0	Node1	Node2	Node3	
Node0	0	2	5	INF	
Node1	INF	0	1	INF	
Node2	INF	INF	0	INF	
Node3	3	INF	INF	0	


After considering node 0 as intermediate:
	Node0	Node1	Node2	Node3	
Node0	0	2	5	INF	
Node1	INF	0	1	INF	
Node2	INF	INF	0	INF	
Node3	3	5	8	0	


After considering node 1 as intermediate:
	Node0	Node1	Node2	Node3	
Node0	0	2	3	INF	
Node1	INF	0	1	INF	
Node2	INF	INF	0	INF	
Node3	3	5	6	0	


After considering node 2 as intermediate:
	Node0	Node1	Node2	Node3	
Node0	0	2	3	INF	
Node1	INF	0	1	INF	
Node2	INF	INF	0	INF	
Node3	3	5	6	0	


After considering node 3 as intermediate:
	Node0	Node1	Node2	Node3	
Node0	0	2	3	INF	
Node1	INF	0	1	INF	
Node2	INF	INF	0	INF	
Node3	3	5	6	0	


After adding edge [1,3,4]:
	Node0	Node1	Node2	Node3	
Node0	0	2	3	6	
Node1	7	0	1	4	
Node2	INF	INF	0	INF	
Node3	3	5	6	0	
</pre> */