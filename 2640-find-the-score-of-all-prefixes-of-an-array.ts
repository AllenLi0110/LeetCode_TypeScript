//Blog: https://allenliservice.online/leetcode-ts-2640-find-the-score-of-all-prefixes-of-an-array/

// <strong>Solution: </strong>
// 這題題目希望我們在轉換的陣列中放入當前數值與 0 到當前陣列位置中最大數值的加總，
// 所以我們需要定義 ans 陣列來存放數值，
// 需要 currentMax 變數來記錄當前最大的數值，
// 以及兩者相加的 totalScore。
// 接下來就可以進行遍歷 nums 陣列的回圈，
// 並做簡單的數學運算即可。

// <strong>Code 1: BigO(n)</strong>
function findPrefixScore(nums: number[]): number[] {
    const ans: number[] = [];
    let currentMax: number = 0;
    let totalScore: number = 0;
    for (const num of nums) {
        currentMax = Math.max(num, currentMax);
        const conver: number = num + currentMax;        
        totalScore += conver;
        ans.push(totalScore);
    }
    return ans;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [2,3,7,5,10]

num: 2 currentMax: 0
Math.max(num, currentMax): 2
conver: 4
totalScore: 4
ans [ 4 ]

num: 3 currentMax: 2
Math.max(num, currentMax): 3
conver: 6
totalScore: 10
ans [ 4, 10 ]

num: 7 currentMax: 3
Math.max(num, currentMax): 7
conver: 14
totalScore: 24
ans [ 4, 10, 24 ]

num: 5 currentMax: 7
Math.max(num, currentMax): 7
conver: 12
totalScore: 36
ans [ 4, 10, 24, 36 ]

num: 10 currentMax: 7
Math.max(num, currentMax): 10
conver: 20
totalScore: 56
ans [ 4, 10, 24, 36, 56 ]

return ans; // [ 4, 10, 24, 36, 56 ]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,1,2,4,8,16]

num: 1 currentMax: 0
Math.max(num, currentMax): 1
conver: 2
totalScore: 2
ans [ 2 ]

num: 1 currentMax: 1
Math.max(num, currentMax): 1
conver: 2
totalScore: 4
ans [ 2, 4 ]

num: 2 currentMax: 1
Math.max(num, currentMax): 2
conver: 4
totalScore: 8
ans [ 2, 4, 8 ]

num: 4 currentMax: 2
Math.max(num, currentMax): 4
conver: 8
totalScore: 16
ans [ 2, 4, 8, 16 ]

num: 8 currentMax: 4
Math.max(num, currentMax): 8
conver: 16
totalScore: 32
ans [ 2, 4, 8, 16, 32 ]

num: 16 currentMax: 8
Math.max(num, currentMax): 16
conver: 32
totalScore: 64
ans [ 2, 4, 8, 16, 32, 64 ]

return ans; // [ 2, 4, 8, 16, 32, 64 ]
</pre> */