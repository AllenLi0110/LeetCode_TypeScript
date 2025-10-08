//Blog: https://allenliservice.online/leetcode-ts-3699-number-of-zigzag-arrays-i/

// <strong>Solution: </strong>
// 這題 3 <= n <= 2000 的情況下，答案有可能超大，所以提供 MOD 10^9 + 7(1_000_000_007)，以此避免數值溢位。
// 我們可以挑選的數值必須介於 r - l + 1 之間，
// 同時我們可以透過 new Array().fill(1) 的方式把長度 n 的陣列先放入 1 數值，也就是我們需要知道有多少組合的初始值定義 dpLast。
// 接著我們開始遍歷這個長度為 3 的迴圈，索引從 0 到 2，對應三個數值。
// 在這過程之中我們需要計算前綴和，目的是新元素比前一個元素小的情況下有多少種組合，同時 % MOD 保證數字不溢位。
// <pre style='background-color:#ggg'>
// dpLast [ 1, 1 ]
//
// length 2
// - count 1, prefixSums [ 0, 1 ]
// - count 1, prefixSums [ 0, 1, 2 ]
//
// length 3
// - count 1, prefixSums [ 0, 1 ]
// - count 0, prefixSums [ 0, 1, 1 ]
// </pre>
// 再來我們要跑一遍倒序的陣列，並且只取和 dpLast 一樣長的元素數量，確保新的狀態數組長度與可選值數量一致。
// <pre style='background-color:#ggg'>
// dpLast [ 1, 1 ]
//
// length 2
// - index 1, dpNext [ 1 ]
// - index 0, dpNext [ 1, 0 ]
// 
// length 3
// - index 1, dpNext [ 1 ]
// - index 0, dpNext [ 1, 0 ]
// </pre>
// 遍歷過程中，我們需要把當前這一輪的結果當作下一次輪的計算基礎。
// 最後，把 dpLast 的所有值加總，再乘以 2。這是因為鋸齒狀陣列具有對稱性，需要同時計算「遞增」與「遞減」兩種排列情況。

// <strong>Code 1: BigO(n * (r - l + 1)</strong>
function zigZagArrays(n: number, l: number, r: number): number {
    const MOD = 1_000_000_007;
    const valueCount = r - l + 1;
 
    let dpLast: number[] = new Array(valueCount).fill(1); 
    for (let length = 2; length <= n; length++) {
        const prefixSums: number[] = [0];
        for (let count of dpLast) {            
            prefixSums.push((prefixSums[prefixSums.length - 1] + count) % MOD); 
        }
 
        const dpNext: number[] = [];
        for (let index = valueCount - 1; index >= 0; index--) {            
            dpNext.push(prefixSums[index]);          
        }
        dpLast = dpNext;
    }

    const total = dpLast.reduce((sum, count) => (sum + count) % MOD, 0);
    return (total * 2) % MOD;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 3, l = 4, r = 5

valueCount = r - l + 1 = 5 - 4 + 1 = 2 // (4 or 5)
dpLast [ 1, 1 ] 

length 2
dpLast [ 1, 0 ] // [5, 4]

length 3
dpLast [ 1, 0 ] // [5, 4, 5]

total = 1 
(total * 2) % MOD = 2 // [5, 4, 5] and [4, 5, 4]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: n = 3, l = 1, r = 3

valueCount = r - l + 1 = 3 - 1 + 1 = 3 // 1 or 2 or 3
dpLast [ 1, 1, 1 ] // [1, 2, 3]

length 2
dpLast [ 2, 1, 0 ] // [2, 1], [3, 1]

length 3
dpLast [ 3, 2, 0 ] 
// [2, 3 ,1], [3, 2, 1], [3, 1, 2]
// [1, 3, 2], [2, 1, 2]

total = 5
(total * 2) % MOD = 10
// [1,2,1], [1,3,1], [1,3,2]
// [2,1,2], [2,1,3], [2,3,1], [2,3,2]
// [3,1,2], [3,1,3], [3,2,3]
</pre> */