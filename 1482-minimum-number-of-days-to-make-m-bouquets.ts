//Blog: https://allenliservice.online/leetcode-ts-1482-minimum-number-of-days-to-make-m-bouquets/

// <strong>Solution: </strong>
// 我們可以把題目給的 bloomDay[] 看作是一個會在第幾天開花的時間表，
// 而我們希望找到最小的天數來開出 m 束花且每束有 k 朵花相鄰。
// 我們先知道這個時間軸可以開出幾朵花 ( n = bloomDay.length)，
// 這裡可以做一個小判斷，如果 n < m * k 就回傳 -1，
// 因為開花表的總數量並不符合 m 束花乘上每束有 k 朵的數量。
// 再來我們可以先將這個時間表由小到大來排序，
// 這樣做可以幫助我們從最小可行天數來處理。
// 接著我們就可以用 Binary Search 來搜尋符合數量的答案(開花天數)，
// 你可以看成是我們把時間表切半從中間開始尋找，
// 如果在這一天能夠開出足夠的花束（≥ m），
// 代表答案可能還可以更小，於是縮小搜尋範圍到左半邊；
// 反之，如果花束數量不夠，就擴大搜尋範圍到右半邊。
// 最後如果有找到則回傳所需天數，如無則回傳 -1。

// <strong>Code 1: BigO(n)</strong>
function minDays(bloomDay: number[], m: number, k: number): number {
    const n: number = bloomDay.length;
    if (n < m * k) return -1;
    const days = [...bloomDay].sort((a, b) => a - b);
    let min: number = -1;
    let max: number = n;

    while (max - min > 1) {
        const mid: number = Math.floor((max + min) / 2);
        const day: number = days[mid];
        let bouquets: number = 0;
        let count: number = 0;
        for (let i = 0; i < n; i++) {
            const bloomed: boolean = bloomDay[i] <= day;
            count = bloomed ? count + 1 : 0;
            if (count === k) {
                bouquets++;
                count = 0;
            }
        }

        if (bouquets >= m) {
            max = mid;            
        } else {
            min = mid;
        }
    }
    return max === n ? - 1: days[max];
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: bloomDay = [1,10,3,10,2], m = 3, k = 1

days [ 1, 2, 3, 10, 10 ]
index  0  1  2   3   4 

mid 2 day 3
count 1
bouquets 1
count 0
count 1
bouquets 2
count 0
count 1
bouquets 3
count 0
🌸 第 3 天可以做出 3 束花

mid 0 day 1
count 1
bouquets 1 // 不符合
count 0
🌸 第 1 天可以做出 1 束花

mid 1 day 2
count 1
bouquets 1
count 0
count 1
bouquets 2 // 不符合
count 0
🌸 第 2 天可以做出 2 束花

bloomDay[1, 10, 3, 10, 2]
index    0   1  2   3  4
第 1 天: ✅ ❌  ❌ ❌ ❌
第 2 天: ✅ ❌  ❌ ❌ ✅
第 3 天: ✅ ❌  ✅ ❌ ✅
return days[max]; // 3
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: bloomDay = [1,10,3,10,2], m = 3, k = 2

n = 5, m * k = 3 * 2 = 6
n < m * k => return -1;
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3

days [7, 7, 7, 7, 7, 7, 12]
index 0  1  2  3  4  5   6

mid 3 day 7
count 1
count 2
count 3
bouquets 1
count 0
count 1
count 1
count 2
🌸 第 7 天可以做出 1 束花

mid 5 day 7
count 1
count 2
count 3
bouquets 1
count 0
count 1
count 1
count 2
🌸 第 7 天可以做出 1 束花

mid 6 day 12
count 1
count 2
count 3
bouquets 1
count 0
count 1
count 2
count 3
bouquets 2
count 0
count 1
🌸 第 12 天可以做出 2 束花

bloomDay[7, 7, 7, 7, 12, 7, 7]
index    0  1  2  3   4  5  6
第 7 天: ✅ ✅ ✅ ✅ ❌ ✅ ✅
第 12天: ✅ ✅ ✅ ✅ ✅ ✅ ✅
return days[max]; // 12
</pre> */