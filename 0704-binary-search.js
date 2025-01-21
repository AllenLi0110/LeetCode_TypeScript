//Blog: https://www.allenliservice.online/leetcode-js-704-binary-search/

// <strong>Solution:</strong>
// 1. 設定 left 為 0， right 為 nums 的長度 - 1。
// 2. while 迴圈處理當 left <= right 時，持續更新搜尋範圍。
// <pre style='background-color:#ggg'>
// left:  v -->
// nums: [口,口,口,口,口]
// right:         <--v
// </pre>

// <strong>Code.1:</strong>
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    }
  }
  return -1;
};

// <strong>Code.2:</strong>
var search = function (nums, target) {
  return nums.indexOf(target);
};
