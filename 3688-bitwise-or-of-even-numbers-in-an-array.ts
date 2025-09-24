//Blog: https://allenliservice.online/leetcode-ts-3688-bitwise-or-of-even-numbers-in-an-array/

// <strong>solution:</strong>
// 根據題目要求，我們需要先篩選出陣列 nums 中的偶數，
// 然後將這些偶數透過位元運算計算它們的 OR 值。若陣列中沒有偶數，則結果為 0。

// <strong>Code 1: BigO(n)</strong>
function evenNumberBitwiseORs(nums: number[]): number {
    let result: number = 0;
    for (const num of nums) {
        if (num % 2 === 0) {
            result = result | num;
        }
    }
    return result;
};

// <strong>Code 2: BigO(n)</strong>
function evenNumberBitwiseORs(nums: number[]): number {
    return nums.reduce((a, c) => c & 1 ? a : a | c, 0);
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,2,3,4,5,6]

1 % 2 !== 0 pass
2 % 2 === 0 result = 0 | 2 = 2
   0  0000
OR 2  0010
----------
      0010 -> 2

3 % 2 !== 0 pass
4 % 2 === 0 result = 2 | 4 = 6
   2  0010
OR 4  0100
----------
      0110 -> 6

5 % 2 !== 0 pass
6 % 2 === 0 result = 6 | 6 = 6
   6  0110
OR 6  0110
----------
      0110 -> 6

return 6;
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: nums = [7,9,11]

7  % 2 !== 0 pass
9  % 2 !== 0 pass
11 % 2 !== 0 pass

return 0;
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,8,16]

1 % 2 !== 0 pass
2 % 2 === 0 result = 0 | 8 = 8
   0  0000
OR 8  1000
----------
      1000 -> 8

16 % 2 === 0 result = 8 | 16 = 24
    8 01000
OR 16 10000
----------
      11000 -> 24

return 24;
</pre>

<strong>Remark: 二進位表示</strong>
<pre style='background-color:#ggg'>  
二進位只有 0 和 1 的表示，每一位從右到左分別代表 2^0, 2^1, 2^2, 2^3…。  
將有 1 的位元加總即可得到十進位值。
value 8   4   2   1
2^n   2^3 2^2 2^1 2^0

      0   0   0   1
-------------------
                  1 -> 1

      0   0   1   1  
-------------------
              2 + 1 -> 3

</pre> */