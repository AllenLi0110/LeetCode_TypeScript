//Blog: https://www.allenliservice.online/leetcode-js-219-contains-duplicate-ii/

// <strong>Solution:</strong>
// 1. 判斷是否有重複的數字，沒有直接返回 false。
// 2. 宣告 box 物件{}。
// 3. 依序將 nums 放入 box{}。
// 4. 加入判斷式，且同時符合，則回傳 true：
// <pre style='background-color:#ggg'>
// 1. 物件特性找出有出現過的數值。
// 2. 重複出現的數值索引 i 和 j，兩者之間的距離小於等於 k。
// </pre>
// 5. 將 box[] 數值放入對應的索引。
// 6. 皆不符合，回傳 false。

// <strong>Code 1: BigO(n)</strong>
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length <= 1) return false; //只有一個數值，條件不成立，故提前結束。

  let box = {};
  for (let i in nums) {
    let j = nums[i];

    if (box[j] && i - box[j] <= k) {
      return true;
    }
    box[j] = i;
  }
  return false;
};

/* <strong>Example 1</strong>
Input: nums = [1,2,3,1], k = 3
nums.length = 4 >= 1

step.1
box = {}
i = 0, j = 1, box[1] = undefined => false |box[1] = 0 => {'1': 0}
i = 1, j = 2, box[2] = undefined => false |box[2] = 1 => {'1': 0, '2': 1} 
i = 2, j = 3, box[3] = underfined => false |box[3] = 2 => {'1': 0, '2': 1, '3': 2}  
i = 3, j = 1, box[1] && ((3 - box[1]) <= k) 
               //  0 && ((3 - 1) <= 3) => return true  */

// <strong>Code 2: BigO(n)</strong>
const containsNearbyDuplicate = function (nums, k) {
  if (nums.length <= 1) return false;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

// <strong>Code 3: Sliding Window BigO(n)</strong>
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length <= 1) return false;
  //hashTable
  const set = new Set();

  //for 遍歷 nums.length
  for (let i = 0; i < nums.length; i++) {
    //確認是否該數值重複出現
    if (set.has(nums[i])) return true;
    //新增 nums[i] 到 set
    set.add(nums[i]);
    //超過 k 距離時，刪除 nums[i]
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
};

// <strong>Code 4: For Loop BigO(n)</strong>
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length <= 1) return false;
  //建立空物件
  const hashTable = {};

  //for 迴圈遍歷 nums 長度
  for (let i = 0; i < nums.length; i++) {
    //判斷當前的數值是否出現在物件裡，確認 <= k
    if (hashTable[nums[i]] !== undefined && i - hashTable[nums[i]] <= k) {
      return true;
    }
    //將陣列中的數值放入空物件中
    hashTable[nums[i]] = i;
  }
  return false;
};
