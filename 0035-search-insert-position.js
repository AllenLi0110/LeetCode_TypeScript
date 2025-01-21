//Blog:https://www.allenliservice.online/leetcode-js-35-search-insert-position/

// <strong>Solution:</strong>
// 1. 先確認目標值是否存在陣列中，如「是」則回傳位置。
// 2. 如「不是」則依序確認陣列中第一個比目標值大的數值，
// 回傳它的位置。
// 3. 如目標值不存在陣列，則放入陣列最後一個位置。

// <strong>Code 1:</strong>
var searchInsert = function (nums, target) {
  //運用indexOf指令比對並回傳位置
  const targetIndex = nums.indexOf(target);
  if (targetIndex >= 0) return targetIndex; //若不存在於陣列中，則indexOf()會回傳 -1。

  //使用for依序比對目標與陣列值得大小
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      return i;
    }
  }
  //陣列沒有比目標值大，放到最後一個位置
  return nums.length;
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
step.1
targetIndex = nums.indexOf(target) //找到符合回傳位置
Array  =  0  1  2  3
nums   = [1, 3, 5, 6]
target =        5
return targetIndex //targetIndex = 2
</pre> */

// <strong>Code 2: Binary Search</strong>
var searchInsert = function (nums, target) {
  nums.push(target);
  nums.sort((a, b) => a - b);
  return nums.indexOf(target);
};

// <strong>Code 3:</strong>
var searchInsert = function (nums, target) {
  //宣告nums的左右位置
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    //宣告中間的位置為整數
    const middle = Math.floor(left + (right - left) / 2); //((left + right) / 2)
    //如果目標值位在陣列中間，回傳中間位置
    if (nums[middle] === target) {
      return middle;
      //如果目標值比陣列中間值大，把右邊位置往左一格
    } else if (nums[middle] > target) {
      right = middle - 1;
      //如果目標值比陣列中間值小，把左邊位置往右一格
    } else if (nums[middle] < target) {
      left = middle + 1;
    }
  }
  //如果目標值不在陣列內，新增在陣列最後一個位置(nums.length)
  return right + 1;
};

//<strong>Code 4: for loop desc</strong>
var searchInsert = function (nums, target) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (target > nums[i]) return i + 1;
    if (target === nums[i]) return i;
  }
  return 0;
};
