//Blog: https://allenliservice.online/leetcode-ts-2507-smallest-value-after-replacing-with-sum-of-prime-factors/

// <strong>Solution: </strong>
// 這題可以當作是數學問題，我們不斷將 n 替換成它的質因數和，直到結果不再改變。
// 我們在 while(true) 迴圈中，從最小質數 2 開始試除，
// 對每個可能的質因數累加到 sum，並將 temp 除以該質因數。
// 當除完之後，如果 temp > 1，表示 temp 本身是一個質數，也要加入 sum。
// 當 sum 等於原本的 n 時，迭代收斂，即可返回最小值。

// <strong>Code 1: BigO(n​ * log n)</strong>
function smallestValue(n: number): number {
    while (true) {
        let original: number = n;
        let sum: number = 0;
        let temp: number = n;

        for (let i = 2; i * i <= temp; i++) {
            while (temp % i === 0) {
                sum += i;
                temp /= i;
            }
        }   
        if (temp > 1) sum += temp;
        if (sum === original) return n;
        n = sum;
    }
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 15

original = 15, sum = 0, temp = 15
i = 2, temp % i = 1, sum = 0 temp = 15
i = 3 temp % i = 0, sum = 3 temp = 5
n = sum = 8

original = 8, sum = 0, temp = 8
i = 2 temp % i = 0, sum 6 temp 1
n = sum = 6

original = 6, sum = 0, temp = 6
i = 2 temp % i = 0, sum 2 temp 3
original 5 sum 0 temp 5
i = 2 temp % i = 1, sum 0 temp 5
n = sum = 5

original = 5, sum = 0, temp = 5
i = 2 temp % i = 1 sum 0 temp 5
n = sum = 5

return n // 5;
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: n = 3
original 3 sum 0 temp 3
n = sum = 3
</pre> */

