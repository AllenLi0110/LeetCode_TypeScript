//Blog: https://allenliservice.online/leetcode-ts-2554-maximum-number-of-integers-to-choose-from-a-range-i/


// <strong>Solution: </strong>
// 我們可以在遍歷 1 ~ n 數字的過程進行累加 sum 與次數 count，
// 然後過濾掉存在 banned [] 裡的數字，
// 如果 sum 大於題目給的 maxSum，則回傳累加的次數。
// 這裡用的是比較 Greedy 的想法，我從最小的開始累加與取數值，
// 如果超過就回傳當前的累加次數，因為題目要的是數量，不是組合。

// <strong>Code 1: BigO(n)</strong>
function maxCount(banned: number[], n: number, maxSum: number): number {
    const set: Set<number> = new Set(banned);    
    let sum: number = 0;
    let count: number = 0;
    
    for (let i = 1; i <= n; i++) {            
        if (set.has(i)) continue;
        if (sum + i > maxSum) break;
        sum += i;
        count++;
    }     
    return count;
};

/*<strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: banned = [1,6,5], n = 5, maxSum = 6

i = 1, set.has(i): true, sum + i > maxSum: false
i = 2, set.has(i): false, sum + i > maxSum: false, sum 2, count 1
i = 3, set.has(i): false, sum + i > maxSum: false, sum 5, count 2
i = 4, set.has(i): false, sum + i > maxSum: true
return count; // 2
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: banned = [1,2,3,4,5,6,7], n = 8, maxSum = 1

i = 1, set.has(i): true, sum + i > maxSum: false
i = 2, set.has(i): true, sum + i > maxSum: true
i = 3, set.has(i): true, sum + i > maxSum: true
i = 4, set.has(i): true, sum + i > maxSum: true
i = 5, set.has(i): true, sum + i > maxSum: true
i = 6, set.has(i): true, sum + i > maxSum: true
i = 7, set.has(i): true, sum + i > maxSum: true
i = 8, set.has(i): false, sum + i > maxSum: true
return count; // 0
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: banned = [11], n = 7, maxSum = 50

i = 1, set.has(i): false, sum + i > maxSum: false, sum 1, count 1
i = 2, set.has(i): false, sum + i > maxSum: false, sum 3, count 2
i = 3, set.has(i): false, sum + i > maxSum: false, sum 6, count 3
i = 4, set.has(i): false, sum + i > maxSum: false, sum 10, count 4
i = 5, set.has(i): false, sum + i > maxSum: false, sum 15, count 5
i = 6, set.has(i): false, sum + i > maxSum: false, sum 21, count 6
i = 7, set.has(i): false, sum + i > maxSum: false, sum 28, count 7
return count; // 7
</pre> */


