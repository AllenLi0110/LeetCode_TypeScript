//Blog: https://allenliservice.online/leetcode-ts-3690-split-and-merge-array-transformation/

//<strong>solution:</strong>
// 我們要透過對 nums1 的拆分與合併操作，最終變成 nums2。
// 由於題目限制 nums1、nums2 長度不超過 6，所以可以用 BFS 找到最少操作步數：
// - queue：存放「當前排列」和「已操作步數」，方便逐層擴展。
// - visited：用 Set 來記錄已拜訪的排列，避免重複計算或無限循環(由於 Set 無法直接比較陣列，所以將陣列轉成字串來快速判斷是否已存在。)。

// 當每次從 queue 取出排列的時候，我們嘗試每個可能的陣列排序：
// - left：子陣列的前綴。
// - sub：被拆分出來的子陣列。
// - right：子陣列的後綴。
// - remaining：移除 sub 後的剩餘陣列，我們頭尾接合起來。
// 接著將 sub 插入到 remaining 的每個可能位置生成新的排列 next，
// 若該陣列尚未訪問過，就加入 queue 並記錄在 visited，直到 nums1 轉換成目標 nums2。

// 如果都無法配對，則回傳 -1。


// <strong>Code 1: BigO(n!*n^3)</strong>
function minSplitMerge(nums1: number[], nums2: number[]): number {
    const n: number = nums1.length;
    const target: string = nums2.join(',');
    const queue: [number[], number][] = [[nums1, 0]];
    const visited: Set<string> = new Set();

    while (queue.length > 0) {
        const [arr, steps] = queue.shift()!;
        const arrKey: string = arr.join(',');

        if (arrKey === target) return steps;

        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                const left: number[] = arr.slice(0, i);
                const sub: number[] = arr.slice(i, j + 1);
                const right: number[] = arr.slice(j + 1);
                const remaining: number[] = left.concat(right);

                for (let k = 0; k <= remaining.length; k++) {
                    const next: number[] = [...remaining.slice(0, k), ...sub, ...remaining.slice(k)];
                    const key: string = next.join(',');
                    if (!visited.has(key)) {
                        visited.add(key);
                        queue.push([next, steps + 1]);
                    }
                }
            }
        }
    }
    return -1;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums1 = [3,1,2], nums2 = [1,2,3]

arr [ 3, 1, 2 ] steps 0
left [] sub [ 3 ] right [ 1, 2 ] remaining [ 1, 2 ]
left [] sub [ 3, 1 ] right [ 2 ] remaining [ 2 ]
left [] sub [ 3, 1, 2 ] right [] remaining []
left [ 3 ] sub [ 1 ] right [ 2 ] remaining [ 3, 2 ]
left [ 3 ] sub [ 1, 2 ] right [] remaining [ 3 ]
left [ 3, 1 ] sub [ 2 ] right [] remaining [ 3, 1 ]

arr [ 1, 3, 2 ] steps 1
left [] sub [ 1 ] right [ 3, 2 ] remaining [ 3, 2 ]
left [] sub [ 1, 3 ] right [ 2 ] remaining [ 2 ]
left [] sub [ 1, 3, 2 ] right [] remaining []
left [ 1 ] sub [ 3 ] right [ 2 ] remaining [ 1, 2 ]
left [ 1 ] sub [ 3, 2 ] right [] remaining [ 1 ]
left [ 1, 3 ] sub [ 2 ] right [] remaining [ 1, 3 ]

arr [ 1, 2, 3 ] steps 1 //arr === target
return steps -> 1
</pre> */
