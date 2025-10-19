//Blog: https://allenliservice.online/leetcode-ts-2553-separate-the-digits-in-an-array/

// <strong>Solution: </strong>
// 這題給了我們一個數值，並且把每個數字都獨立並放入陣列中。
// 所以我們可以遍歷這個 nums 陣列，
// 並且把得到的數值轉成字串後放入到 arr 陣列中即可。

// <strong>Code 1: BigO(n x k)</strong>
function separateDigits(nums: number[]): number[] {
    let arr: number[] = [];
    for (const num of nums) {
        for (const char of num.toString()) {
            arr.push(Number(char));
        }
    }
    return arr;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [13,25,83,77]

num 13, char 1, char 3
num 25, char 2, char 5
num 83, char 8, char 3
num 77, char 7, char 7
return [1,3,2,5,8,3,7,7]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [7,1,3,9]

num 13, char 1, char 3
num 25, char 2, char 5
num 83, char 8, char 3
num 77, char 7, char 7
return [1,3,2,5,8,3,7,7]
</pre> */