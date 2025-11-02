//Blog: https://allenliservice.online/leetcode-ts-2594-minimum-time-to-repair-cars/

// <strong>Solution: </strong>
// 這題我們可以用 binary search 搜尋最短時間，
// left 為最小時間，right 為最慢的技師修理完所有車的時間。
// 透過中間值 mid 計算每個技師在該時間內最多能修幾台車，
// 如果總數 >= cars 就嘗試更短時間，
// 否則需要更多時間，迴圈結束後回傳 right。

// <strong>Code 1: BigO(n log cars)</strong>
function repairCars(ranks: number[], cars: number): number {
    let left = 0;
    let right = Math.min(...ranks) * cars * cars + 1;

    while (right - left > 1) {
        const mid = Math.floor((left + right) / 2);
        let repaired = 0;

        for (const r of ranks) {
            repaired += Math.floor(Math.sqrt(mid / r));
            if (repaired >= cars) break; 
        }

        if (repaired >= cars) {
            right = mid;
        } else {
            left = mid;  
        }
    }
    return right; 
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: ranks = [4,2,3,1], cars = 10

mid 50
r of ranks 4 repaired 3
r of ranks 2 repaired 8
r of ranks 3 repaired 12
right = mid 50

mid 25
r of ranks 4 repaired 2
r of ranks 2 repaired 5
r of ranks 3 repaired 7
r of ranks 1 repaired 12
right = mid 25

mid 12
r of ranks 4 repaired 1
r of ranks 2 repaired 3
r of ranks 3 repaired 5
r of ranks 1 repaired 8
left = mid 12

mid 18
r of ranks 4 repaired 2
r of ranks 2 repaired 5
r of ranks 3 repaired 7
r of ranks 1 repaired 11
right = mid 18

mid 15
r of ranks 4 repaired 1
r of ranks 2 repaired 3
r of ranks 3 repaired 5
r of ranks 1 repaired 8
left = mid 15

mid 16
r of ranks 4 repaired 2
r of ranks 2 repaired 4
r of ranks 3 repaired 6
r of ranks 1 repaired 10
right = mid 16

return right; // 16
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: ranks = [5,1,8], cars = 6

mid 18
r of ranks 5 repaired 1
r of ranks 1 repaired 5
r of ranks 8 repaired 6
right = mid 18

mid 9
r of ranks 5 repaired 1
r of ranks 1 repaired 4
r of ranks 8 repaired 5
left = mid 9

mid 13
r of ranks 5 repaired 1
r of ranks 1 repaired 4
r of ranks 8 repaired 5
left = mid 13

mid 15
r of ranks 5 repaired 1
r of ranks 1 repaired 4
r of ranks 8 repaired 5
left = mid 15

mid 16
r of ranks 5 repaired 1
r of ranks 1 repaired 5
r of ranks 8 repaired 6
right = mid 16

return right; // 16
</pre> */
