//Blog:http://allenliservice.online/leetcode-js-1-two-sum/

//<strong>Solution:</strong>
//1. 想像數組的陣列為一區塊
//2. 用「for迴圈」將目標值與陣列依序判斷
//3.「if條件」將目標值減去數組中的數字並判斷是否未定義
//   true: 不是未定義，回傳[對應 hashTable 中值的位置, 回合數]
//   false: 是未定義，將比對回合數放入 hashTable 中對應數組位置
//ex.詳情請閱FlowChart

//<strong>Code 1:</strong>
var twoSum = function (nums: number[], target: number): number[] {
  const hashTable: Record<string, number> = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[target - nums[i]] !== undefined) {
      return [hashTable[target - nums[i]], i];
    } else {
      hashTable[nums[i]] = i;
    }
  }
  return [];
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [2, 7, 11, 15], target = 9
i = 0  1   2   3
      2   7   11  15

step.1
hashTable = {} // 初始為空物件
i = 0; nums[i] = 2;
if ((hashTable[9 - 2]) === undefined) // hashTable[7] 不存在
hashTable[nums[i]] = i; // 將 2 的索引存入 hashTable，結果：hashTable = { 2: 0 }

step.2
hashTable = { 2: 0 } 
i = 1; nums[1] = 7;
if ((hashTable[9 - 7]) !== undefined) // hashTable[2] 存在，且值為 0
return ([hashTable[9 - 7], 1]); // 返回 [0, 1]
</pre>*/

//<strong>Code 2: map + forEach</strong>
var twoSum = function (nums: number[], target: number): number[] {
  const indexMap: Map<number, number> = new Map();
  let result: number[] = [];

  nums.forEach((num, index) => {
    const complement = target - num;

    if (indexMap.has(complement)) {
      result = [indexMap.get(complement)!, index];
    }
    indexMap.set(num, index);
  });
  return result;
};
