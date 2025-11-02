//Blog: https://allenliservice.online/leetcode-ts-2593-find-score-of-an-array-after-marking-all-elements/

// <strong>Solution: </strong>
// 我們先將元素與索引配對並排序。 
// pairs = [[2, 0], [1, 1], [3, 2], [4, 3], [5, 4], [2, 5]]
// pairs.sort() = [[1, 1], [2, 0], [2, 5], [3, 2], [4, 3], [5, 4]]
// 每次選未標記的最小值時，就把它與相鄰元素標記並累加到 score，
// 最後回傳 score。

// <strong>Code 1: BigO(n log n)</strong>
function findScore(nums: number[]): number {
    const pairs: number[][] = nums.map((num, idx) => [num, idx] as [number, number]); 
    pairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);     
    const marked: boolean[] = Array(nums.length).fill(false);
    let score: number = 0;

    for (const [num, i] of pairs) {
        if (!marked[i]) {
            score += num;
            if (i > 0) marked[i - 1] = true;
            marked[i] = true;
            if (i < nums.length - 1) marked[i + 1] = true;
        }
    }
    return score;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [2,1,3,4,5,2]

pairs [ [ 2, 0 ], [ 1, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ], [ 2, 5 ] ]
pairs [ [ 1, 1 ], [ 2, 0 ], [ 2, 5 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ]
num 1 index 1 score 1
marked: [ true, true, true, false, false, false ]
num 2 index 5 score 3
marked: [ true, true, true, false, true, true ]
num 4 index 3 score 7
marked: [ true, true, true, true, true, true ]
return score; // 7
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [2,3,5,1,3,2]

pairs [ [ 2, 0 ], [ 3, 1 ], [ 5, 2 ], [ 1, 3 ], [ 3, 4 ], [ 2, 5 ] ]
pairs [ [ 1, 3 ], [ 2, 0 ], [ 2, 5 ], [ 3, 1 ], [ 3, 4 ], [ 5, 2 ] ]
num 1 index 3 score 1
marked: [ false, false, true, true, true, false ]
num 2 index 0 score 3
marked: [ true, true, true, true, true, false ]
num 2 index 5 score 5
marked: [ true, true, true, true, true, true ]
return score; // 5
</pre> */