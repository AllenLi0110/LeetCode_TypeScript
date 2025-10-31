//Blog: https://allenliservice.online/leetcode-ts-2869-minimum-operations-to-collect-elements/

// <strong>Solution: </strong>
// 根據題目要求，我們從陣列的尾端開始遍歷，
// 在遍歷的過程中收集所有小於或等於 k 的元素，
// 並將符合條件的元素加入一個 Set 中（這裡要確保不重複）。
// 同時計算我們遍歷的次數。
// 當 Set 中的元素個數等於 k 時，表示我們已經收集到從 1 到 k 的所有數值，
// 此時回傳目前的遍歷次數即可。
// 若遍歷結束仍未達到 k，則回傳總遍歷次數。
// [3, 1, 5, 4, 2]
// k = 2(1 ~ 2) pop 2, add {2} 
// k = 2(1 ~ 2) pop 4, add {2, 4}
// k = 2(1 ~ 2) pop 5, add {2, 4, 5}
// k = 2(1 ~ 2) pop 1, add {2, 4, 5, 1}

// <strong>Code 1: BigO(n)</strong>
function minOperations(nums: number[], k: number): number {
    const set: Set<number> = new Set();
    let count: number = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        const value: number = nums[i];
        if (value <= k) set.add(value);
        count++;
        if (set.size === k) return count;        
    }
    return count;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [3,1,5,4,2], k = 2

value 2, set Set(1) { 2 }, count 1
value 4, set Set(1) { 2 }, count 2
value 5, set Set(1) { 2 }, count 3
value 1, set Set(2) { 2, 1 }, count 4
return count; // 4
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [3,1,5,4,2], k = 5

value 2, set Set(1) { 2 }, count 1
value 4, set Set(2) { 2, 4 }, count 2
value 5, set Set(3) { 2, 4, 5 }, count 3
value 1, set Set(4) { 2, 4, 5, 1 }, count 4
value 3, set Set(5) { 2, 4, 5, 1, 3 }, count 5
return count; // 5
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: nums = [3,2,5,3,1], k = 3

value 1, set Set(1) { 1 }, count 1
value 3, set Set(2) { 1, 3 }, count 2
value 5, set Set(2) { 1, 3 }, count 3
value 2, set Set(3) { 1, 3, 2 }, count 4
return count; // 4
</pre> */


