//Blog: https://allenliservice.online/leetcode-ts-2870-minimum-number-of-operations-to-make-array-empty/

// <strong>Solution: </strong>
// 用 count 統計每個數出現次數，
// 然後對每個數：
// <pre style='background-color:#ggg'>
// 出現 1 次 → 回傳 -1（不能刪）
// 出現 2 或 3 次 → +1 次操作
// 出現更多 → 盡量用 3 個一組刪，
// 若剩 1 或 2 個，再補用 2 個一組刪。
// 最後回傳總操作次數。

// 可被 3 整除，除以 3 可以得到次數。 
// ex. number = 6 (3 + 3)
// number % 3 = 0 

// 被 3 除後剩下 1，把其中一組 3 改成 2 + 2，也就是先手動 - 4 在除 3，這個 4 可以得到 2 的次數(2 + 2)。 
// ex. number = 7 (2 + 2 + 3)
// number % 3 = 1 

// 被 3 除後剩下 2，先扣 2 在除以 3。
// ex. number = 5 (2 + 3)
// number $ 3 = 2
// </pre>

// <strong>Code 1: BigO(n)</strong>
function minOperations(nums: number[]): number {
    const count: Map<number, number> = new Map();
    for (const n of nums) {
        count.set(n, (count.get(n) || 0) + 1);
    }

    let ops: number = 0;
    for (const c of count.values()) {
        if (c === 1) return -1;
        if (c === 2 || c === 3) {
            ops += 1;
            continue;
        }

        const remainder: number = c % 3;
        if (remainder === 0) {
            ops += c / 3;
        } else if (remainder === 1) {
            ops += Math.floor((c - 4) / 3) + 2;
        } else {
            ops += Math.floor((c - 2) / 3) + 1;
        }
    }
    return ops;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [2,3,3,2,2,4,2,3,4]

count Map(3) { 2 => 4, 3 => 3, 4 => 2 }
c 4, remainder 1, ops 2
c 3, ops 3
c 2, ops 4
return ops; // 4
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [2,1,2,2,3,3]

count Map(3) { 2 => 3, 1 => 1, 3 => 2 }
c 3, ops = 1
c 1 return -1
</pre> */


