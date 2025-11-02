//Blog: https://allenliservice.online/leetcode-ts-2592-maximize-greatness-of-an-array/

// <strong>Solution: </strong>
// 先將陣列排序好，然後用 i, j 雙指針來進行比大小，
// 當右指針比左指針大，代表找到 greatness 數值 count + 1，
// 同時兩個指針分別往前移動，遍歷完迴圈後回完 count。
// 這題可以模擬一下過程：
// <pre style='background-color:#ggg'>
// nums: [1, 1, 1, 2, 3, 3, 5]
//        ↑
// perm: [1, 1, 1, 2, 3, 3, 5]
//        ↑
// 比較：1 vs 1 → X  
// 
// nums: [1, 1, 1, 2, 3, 3, 5]
//        ↑
// perm: [1, 1, 1, 2, 3, 3, 5]
//         ↑
// 比較：1 vs 1 → X  
// 
// nums: [1, 1, 1, 2, 3, 3, 5]
//        ↑
// perm: [1, 1, 1, 2, 3, 3, 5]
//                ↑
// 比較：1 vs 2 → ok
// → count = 1, i++, j++
// </pre>  

// <strong>Code 1: BigO(n log n)</strong>
function maximizeGreatness(nums: number[]): number {
    const sortedNums: number[] = nums.sort((a, b) => a - b);
    let i: number = 0;
    let count: number = 0;
    for (let j = 0; j < nums.length; j++) {
        if (sortedNums[i] < sortedNums[j]) {
            i++
            count++;
        }
    }
    return count;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,3,5,2,1,3,1]

sortedNums [
  1, 1, 1, 2,
  3, 3, 5
]
j 0 i 0 count 0
j 1 i 0 count 0
j 2 i 0 count 0
j 3 i 1 count 1
j 4 i 2 count 2
j 5 i 3 count 3
j 6 i 4 count 4
return count; // 4
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,2,3,4]

sortedNums [ 1, 2, 3, 4 ]
j 0 i 0 count 0
j 1 i 1 count 1
j 2 i 2 count 2
j 3 i 3 count 3
count 3
</pre> */