//Blog: https://www.allenliservice.online/leetcode-js-169-majority-element/

// <strong>Solution:</strong>
// 1. 如 nums 中只有一個元素時，回傳該元素的值。
// 2. 宣告一個 box 物件。
// 3. 進行 nums.length 長度的迴圈。
// 4. 運用物件{ } 的特性，如果 box[i] 中沒有對應的物件，則顯示undefined，而!undefined 為 false 轉為 true，執行對應物件次數為 { 'i': 1 }
// 5 - 1. 如有 box[i] 存在物件中，則顯示次數，而!1 的相反為 true 轉為 false，執行對應物件++ 為 { 'i': 1 + 1 }
// 5 - 2. 如果該物件的次數大於 nums陣列的長度 / 2，則返回該數值。

// <strong>Code:</strong>
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  let box = {};

  for (let i = 0; i < nums.length; i++) {
    if (!box[nums[i]]) {
      box[nums[i]] = 1;
    } else {
      box[nums[i]]++;

      if (box[nums[i]] >= nums.length / 2) {
        return nums[i];
      }
    }
  }
};

/* <strong>Example 1</strong>
Input: nums = [3,2,3]
nums.length = 3

step.1
i = 0
box = {}
!box[nums[0]] => !box[3] => !undefined = true
box[nums[0]] = 1 //{'3': 1}

i = 1
box = {'3': 1}
!box[nums[1]] => !box[2] => !undefined = true
box[nums[1]] = 1//{ '2': 1, '3': 1 }

i = 2
box = {'2': 1, '3': 1}
!box[nums[2]] => !box[3] => !1 => false
box[nums[2]]++ => {'2': 1, '3': 2}
(box[nums[2]] >= nums.length / 2) //{'3'} 2 >= (3/2)=> 2 >= 1.5
return nums[2] //3 */

// <strong>Code 2: Boyer–Moore majority vote algorithm BigO(n)</strong>
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  let target,
    counter = 0;

  for (const num of nums) {
    if (counter === 0) {
      target = num;
      counter++;
    } else if (target === num) {
      counter++;
    } else {
      counter--;
    }
  }
  return target;
};

// <strong>Code 3: Boyer–Moore majority vote algorithm BigO(n)</strong>
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  let target = 0,
    counter = 0;

  for (const num of nums) {
    if (counter === 0) {
      target = num;
    }
    counter += num === target ? 1 : -1;
  }
  return target;
};

// <strong>Code 4: HashTable BigO(m + n)</strong>
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  let hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = (hashTable[nums[i]] || 0) + 1;
  }

  for (let num in hashTable) {
    if (hashTable[num] >= nums.length / 2) return num;
  }
};
