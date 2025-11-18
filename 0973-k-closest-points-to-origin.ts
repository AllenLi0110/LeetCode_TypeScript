//Blog: https://allenliservice.online/leetcode-ts-973-k-closest-points-to-origin/

// <strong>Solution: </strong>
// 這題題目要求給了我們 x, y 軸的點，
// 然後請我們找出 k 個與原點(0, 0)距離最近的點。
// 我們先從 points 提供的 a, b 兩點求出距離 distance，
// 並且將這個陣列做排序，
// 最後再從最短的距離依序取出 k 個組合即可，
// 記得題目只要點位，所以用 map 把距離移除。

// <strong>Code 1: BigO(n log n)</strong>
function kClosest(points: number[][], k: number): number[][] {
    const arr: [number, number, number][] = [];
    for (const [a, b] of points) {
        const distance: number = a ** 2 + b ** 2;
        arr.push([distance, a, b]);
    }
    arr.sort((a, b) => a[0] - b[0]);
    const result: number[][] = arr.slice(0, k).map(([_, a, b]) => [a, b]);
    return result;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: points = [[1,3],[-2,2]], k = 1

arr [ [ 10, 1, 3 ], [ 8, -2, 2 ] ]
arrSorted [ [ 8, -2, 2 ], [ 10, 1, 3 ] ]

return result; // [ [ -2, 2 ] ]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: points = [[3,3],[5,-1],[-2,4]], k = 2

arr [ [ 18, 3, 3 ], [ 26, 5, -1 ], [ 20, -2, 4 ] ]
arrSorted [ [ 18, 3, 3 ], [ 20, -2, 4 ], [ 26, 5, -1 ] ]

return result; // [ [ 3, 3 ], [ -2, 4 ] ]
</pre> */