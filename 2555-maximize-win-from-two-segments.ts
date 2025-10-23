//Blog: https://allenliservice.online/leetcode-ts-2555-maximize-win-from-two-segments/

// <strong>Solution: </strong>
// 這題我覺得最重要的是看懂題目所表達的意思，
// 題目給了一個陣列，每個元素代表一個寶藏的位置。如果某個位置出現多次，就代表這個位置有多個寶藏。
// 例如 [1,1,2,2,3,3,5] 表示:
// <pre style='background-color:#ggg'>
// prizePositions = [1, 1, 2, 2, 3, 3, 5] 
// arrayIndex =      0  1  2  3  4  5  6  //這裡只是陣列位置，不是線段的座標
// prizePosition & count =  { 
//                            1: 2,  // 位置 1 有 2 個寶藏（index 0,1）
//                            2: 2,  // 位置 2 有 2 個寶藏（index 2,3）
//                            3: 2,  // 位置 3 有 2 個寶藏（index 4,5）
//                            5: 1   // 位置 5 有 1 個寶藏（index 6）
//                          }
// </pre>
// 我們整理一下可以得到：
// <pre style='background-color:#ggg'>
// 位置 → 1   2   3   4   5
// 寶藏 → 🟊🟊  🟊🟊  🟊🟊      🟊
// </pre>
// 了解題目意思之後，我們從題目給的陣列來處理，
// 我們先設定一個 arr[] 裝著 0 來記錄 index i 的單段最大寶藏數，
// 我們運用 Sliding Window 的概念，我們的 right 向右移動，
// 當區間長度 > k 的時候，left 就要向右移動保持窗口長度 <= k。
// 同時因為陣列排序了，所以相同位置的寶藏會連在一起，
// 而陣列的每個位置都代表一個寶藏，所以窗口的長度 count 就等於這個區間內能拿到多少的寶藏。
// 再來我們透過 arr[] 來記錄遍歷過程中可以得到的當前最大寶藏數量，
// 遍歷完整個陣列之後，我們可以得到最大寶藏數量(左段 + 右段)。

// <strong>Code 1: BigO(n)</strong>
function maximizeWin(prizePositions: number[], k: number): number {
    let ans: number = 0;
    let count: number = 0;
    let left: number = 0;
    const arr = Array(prizePositions.length).fill(0);

    for (let right = 0; right < prizePositions.length; right++) {
        while (prizePositions[right] - prizePositions[left] > k) left++;
        count = right - left + 1;
        arr[right] = Math.max(arr[right - 1] ?? 0, count);
        ans = Math.max(ans, (arr[left - 1] ?? 0) + count);
    }
    return ans;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: prizePositions = [1,1,2,2,3,3,5], k = 2

arr [0, 0, 0, 0, 0, 0, 0]
right 0 left 0, count 1, arr [1, 0, 0, 0, 0, 0, 0], ans 1
right 1 left 0, count 2, arr [1, 2, 0, 0, 0, 0, 0], ans 2
right 2 left 0, count 3, arr [1, 2, 3, 0, 0, 0, 0], ans 3
right 3 left 0, count 4, arr [1, 2, 3, 4, 0, 0, 0], ans 4
right 4 left 0, count 5, arr [1, 2, 3, 4, 5, 0, 0], ans 5
right 5 left 0, count 6, arr [1, 2, 3, 4, 5, 6, 0], ans 6
right 6 left 4, count 3, arr [1, 2, 3, 4, 5, 6, 6], ans 7
return ans; // 7
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: prizePositions = [1,2,3,4], k = 0

arr [ 0, 0, 0, 0 ]
right 0 left 0, count 1, arr [ 1, 0, 0, 0 ], ans 1
right 1 left 1, count 1, arr [ 1, 1, 0, 0 ], ans 2
right 2 left 2, count 1, arr [ 1, 1, 1, 0 ], ans 2
right 3 left 3, count 1, arr [ 1, 1, 1, 1 ], ans 2
return ans; // 2
</pre> */




