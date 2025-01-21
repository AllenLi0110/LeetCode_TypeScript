//Blog: http://allenliservice.online/leetcode-js-88-merge-sorted-array/
//Bubble: https://www.allenliservice.online/關於bubble-sort排序方法與示意圖/

//<strong>Solution:</strong>
//1. 宣告 index = 0
//2. 使用 for 迴圈將 nums2 的值合併到nums1。
//3. 雙 for 迴圈進行兩兩比對，當 nums1 > nums2 時，兩兩數字互換。

//<strong> Code 1: BigO(n^2) </strong>
var merge = function (nums1, m, nums2, n) {
  // let the index become the starting point
  let index = 0;

  // merge in reverse order
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[index];
    index++;
  }

  // use destructuring assignment to swap variables.
  for (let j = 0; j < nums1.length - 1; j++) {
    for (let k = j + 1; k < nums1.length; k++) {
      if (nums1[j] > nums1[k]) {
        [nums1[j], nums1[k]] = [nums1[k], nums1[j]];
      }
    }
  }
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

step.1 let i = m //3
i < (3 + 3) //6
nums1[3] = nums2[0] //[1,2,3,0,0,0] => [1,2,3,0,0,0]
                                              2
index++ //1

i++ //4
i < (3 + 3) //6
nums1[4] = nums2[1] //[1,2,3,2,0,0] => [1,2,3,2,0,0]
                                                5
index++ //2

i++ //5
i < (3 + 3) //6
nums1[5] = nums2[2] //[1,2,3,2,5,0] => [1,2,3,2,5,0]
                                                  6
index++ //3

step.2 nums1 = [1,2,3,2,5,6] 
j = 0, j < 5
k = 0 + 1, k < 6 ...  //k = 1, 2, 3, 4 ,5
nums1[0] > nums1[1] //1 < 2
nums1[0] > nums1[2] //1 < 3
nums1[0] > nums1[3] //1 < 2
nums1[0] > nums1[4] //1 < 5
nums1[0] > nums1[5] //1 < 6

j = 1
k = 1 + 1, k < 6 ...  //k = 1, 2, 3, 4 ,5
nums1[1] > nums1[2] //2 < 3
nums1[1] > nums1[3] //2 < 2
nums1[1] > nums1[4] //2 < 5
nums1[1] > nums1[5] //2 < 6

j = 2
k = 2 + 1, k < 6 ...  //k = 1, 2, 3, 4 ,5
nums1[2] > nums1[3] //3 < 2
box = nums1[2] = 3; nums1[2] = nums1[3] => 2; nums1[3] = box => 3
nums1 = [1,2,2,3,5,6] 
nums1[2] > nums1[4] //2 < 5
nums1[2] > nums1[5] //2 < 6

j = 3
k = 3 + 1, k < 6 ...  //k = 1, 2, 3, 4 ,5
nums1[3] > nums1[4] //3 < 5
nums1[3] > nums1[5] //3 < 6

j = 4
k = 4 + 1, k < 6 ...  //k = 1, 2, 3, 4 ,5
nums1[4] > nums1[5] //5 < 6

nums1 = [1,2,2,3,5,6] */

//<strong>Code 2: BigO(n log n)</strong>
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  return nums1.sort((a, b) => a - b);
};

//<strong>Code 3: BigO(n log n)</strong>
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.forEach((n) => nums1.push(n));
  return nums1.sort((a, b) => a - b);
};

//<strong>Code 4: BigO(n log n)</strong>
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);

  return nums1.sort((a, b) => a - b);
};

<strong>Code 5: BigO(n)</strong>;
var merge = function (nums1, m, nums2, n) {
  // let index of completed nums1
  let k = m + n - 1;

  // merge in reverse order
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[k] = nums1[m - 1];
      m--;
    } else {
      nums1[k] = nums2[n - 1];
      n--;
    }
    k--;
  }

  // if m = 0 then push nums2 in nums1
  while (n > 0) {
    nums1[k] = nums2[n - 1];
    k--;
    n--;
  }
};
