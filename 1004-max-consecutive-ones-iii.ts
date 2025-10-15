//Blog: https://allenliservice.online/leetcode-ts-1004-max-consecutive-ones-iii/

// <strong>Solution: </strong>
// 我們不知道陣列中到底最長的連續 1 為多少，
// 但是如果我們想要知道，我們會需要掃過一次這個陣列 nums，
// 掃過的過程中，我們可以用變數紀錄左邊、右邊的指針位置，
// 因為這樣我們才能計算連續 1 的長度，
// 再來我們需要有一個變數 zeros 來存放遍歷過程中有多少個 0，
// 因為我們要在遍歷的過程中去翻轉 0 變成 1 來得到最長長度，
// 當超過可以使用 k 次翻轉 0 時，我們可以把左邊指針往右繼續尋找下一組長度。

// <strong>Code 1: BigO(n)</strong>
function longestOnes(nums: number[], k: number): number {
    let left: number = 0;    
    let zeros: number = 0;
    let maxLength: number = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeros++;

        while (zeros > k) {
            if (nums[left] === 0) zeros--;
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2

right = 0, left = 0, zeros = 0, maxLength = 1
right = 1, left = 0, zeros = 0, maxLength = 2
right = 2, left = 0, zeros = 0, maxLength = 3
right = 3, left = 0, zeros = 1, maxLength = 4
right = 4, left = 0, zeros = 2, maxLength = 5
right = 5, left = 4, zeros = 2, maxLength = 5
right = 6, left = 4, zeros = 2, maxLength = 5 
right = 7, left = 4, zeros = 2, maxLength = 5
right = 8, left = 4, zeros = 2, maxLength = 5
right = 9, left = 4, zeros = 2, maxLength = 6
right = 10, left = 5, zeros = 2, maxLength = 6
return maxLength; // 6;
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3

right = 0, left = 0, zeros = 1, maxLength = 1
right = 1, left = 0, zeros = 2, maxLength = 2
right = 2, left = 0, zeros = 2, maxLength = 3
right = 3, left = 0, zeros = 2, maxLength = 4
right = 4, left = 0, zeros = 3, maxLength = 5
right = 5, left = 1, zeros = 3, maxLength = 5
right = 6, left = 1, zeros = 3, maxLength = 6
right = 7, left = 1, zeros = 3, maxLength = 7
right = 8, left = 1, zeros = 3, maxLength = 8
right = 9, left = 2, zeros = 3, maxLength = 8
right = 10, left = 2, zeros = 3, maxLength = 9
right = 11, left = 2, zeros = 3, maxLength = 10
right = 12, left = 5, zeros = 3, maxLength = 10
right = 13, left = 6, zeros = 3, maxLength = 10
right = 14, left = 10, zeros = 3, maxLength = 10
right = 15, left = 10, zeros = 3, maxLength = 10
right = 16, left = 10, zeros = 3, maxLength = 10
right = 17, left = 10, zeros = 3, maxLength = 10
right = 18, left = 10, zeros = 3, maxLength = 10
return maxLength; // 10;
</pre> */
