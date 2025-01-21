//Blog: https://www.allenliservice.online/leetcode-js-217-contains-duplicate/

// <strong>Solution:</strong>
// 1. 建立 hashTable 物件。
// 2. 運用「for of」來將 nums 陣列中的數值依序取出。
// 3. 判斷該數值是否存在 hashTable 物件中，如有回傳 true，反之在 hashTable 物件存入該數值為名稱，並配對 true。
// 4. 沒有重複出現的數值，則回傳 false。

// <strong>Code 1: BigO(n)</strong>
var containsDuplicate = function (nums) {
  let hashTable = {};

  for (let num of nums) {
    if (hashTable[num]) return true;
    hashTable[num] = true;
  }
  return false;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,2,3,1]

{ '1': true }
{ '1': true, '2': true }
{ '1': true, '2': true, '3': true }

if (hashTable[1]) = true, return true;
</pre> */

// <strong>Code 2: BigO(2n)</strong>
var containsDuplicate = function (nums) {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = (hashTable[nums[i]] || 0) + 1;
  }
  for (let num of nums) {
    if (hashTable[num] > 1) return true;
  }
  return false;
};

// <strong>Code 3: BigO(n)</strong>
var containsDuplicate = function (nums) {
  const numsSet = new Set();

  for (let num of nums) {
    if (numsSet.has(num)) {
      return true;
    } else {
      numsSet.add(num);
    }
  }
  return false;
};

// <strong>Code 4: BigO(n)</strong>
var containsDuplicate = function (nums) {
  const numsSet = new Set(nums);
  return numsSet.size !== nums.length;
};

// <strong>Code 5: BigO(n)</strong>
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};
