//Blog: https://allenliservice.online/leetcode-ts-1390-four-divisors/

// <strong>Solution: </strong>
// 這題如果用窮舉的方式會得到 Time Limit Exceeded，
// 因為題目的 Constraints 給了 1 <= nums[i] <= 10^5，
// 這會導致你在找因數的時候因為數值過大而超時。
// 我們從以下幾點來做優化：
// 1. 因數成對出現：任何數的因數都成對存在，例如 21 = 1 × 21 = 3 × 7。
// 2. 縮小搜尋範圍：只需檢查到 √num，就能找到所有因數，也就是 i * i。
// 3. 提早結束：當因數數量超過 4 時即可跳出迴圈，避免不必要的計算。

// <strong>Code 1: BigO(n × √m)</strong>
function sumFourDivisors(nums: number[]): number {  
    let total: number = 0;    
    for (const num of nums) {
        let sum: number = 0;
        let count: number = 0;
        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                sum += i + num / i
                count += (i * i === num ? 1 : 2)
            }
            if (count > 4) break;
        }
        if (count === 4) total += sum        
    }
    return total;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [21,4,7]

num = 21
  i=1, pair=21, count=2, sum=22
  i=3, pair=7, count=4, sum=32
  ✅ 4 divisors, add sum=32
num = 4
  i=1, pair=4, count=2, sum=5
  i=2, pair=2, count=3, sum=7
  ❌ count=3
num = 7
  i=1, pair=7, count=2, sum=8
  ❌ count=2
total = 32
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [21,21]

num = 21
  i=1, pair=21, count=2, sum=22
  i=3, pair=7, count=4, sum=32
  ✅ 4 divisors, add sum=32
num = 21
  i=1, pair=21, count=2, sum=22
  i=3, pair=7, count=4, sum=32
  ✅ 4 divisors, add sum=32
total = 64
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,2,3,4,5]

num = 1
  i=1, pair=1, count=1, sum=1
  ❌ count=1
num = 2
  i=1, pair=2, count=2, sum=3
  ❌ count=2
num = 3
  i=1, pair=3, count=2, sum=4
  ❌ count=2
num = 4
  i=1, pair=4, count=2, sum=5
  i=2, pair=2, count=3, sum=7
  ❌ count=3
num = 5
  i=1, pair=5, count=2, sum=6
  ❌ count=2
total = 0
</pre> */