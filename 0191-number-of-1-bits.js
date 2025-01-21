//Blog: https://www.allenliservice.online/leetcode-js-191-number-of-1-bits/

// <strong>Solution:</strong>
// 1. 宣告 count 次數為 0。
// 2. 宣告 nums 為 n.toString 二進制的字串，且將陣列中的每個數值分割為單一元素。
// <pre style='background-color:#ggg'>
//  Ex. Input = 3
//  toString(2) = 00000000000000000000000000001011
//  toString(2).split("") =
//  [
//  '0', '0', '0', '0', '0', '0',
//  '0', '0', '0', '0', '0', '0',
//  '0', '0', '0', '0', '0', '0',
//  '0', '0', '0', '0', '0', '0',
//  '0', '0', '0', '0', '1', '0',
//  '1', '1'
//  ]
// </pre>
// 3. 運用「for in」將每個元素皆除以2，如果剩餘1，則 count++。
// 4. 回傳 count 次數。

//<strong>Code 1: BigO(n)</strong>;
var hammingWeight = function (n) {
  let count = 0,
    nums = n.toString(2).split("");

  for (let num in nums) {
    if (nums[num] % 2 === 1) {
      count++;
    }
  }
  return count;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: n = 00000000000000000000000000001011
                                       1 23 
Output count = 3 */
