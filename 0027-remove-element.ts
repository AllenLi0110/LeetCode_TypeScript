//Blog:https://www.allenliservice.online/leetcode-js-27-remove-element/

// <strong>Code 1:</strong>
var removeElement = function (nums: number[], val: number): number {
  if (!nums) return 0;

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      //如果nums[i]不等於2
      nums[k] = nums[i]; //將原陣列的第k個的值，變更成第i個的值
      k++; //k往下一位進行判斷
    }
  }
  return k;
};

/*  < strong > FlowChart:</strong>
    <pre style='background-color:#ggg'>
      i = for loop
      k = note
      remove val = 2

      step.1
      i =  0
      [0,1,2,2,3,0,4,2]  // nums[0] = nums[0]
      k =  0                 // next
      nums[0]

      step.2
      i =    1
      [0,1,2,2,3,0,4,2]  // nums[1] = nums[1]
      k =    1               // next
      nums[0,1]

      step.3
      i =      2
      [0,1,2,2,3,0,4,2]. // remove val
      k =      2             // keep k
      nums[0,1]

      step.4
      i =        3
      [0,1,2,2,3,0,4,2]. // remove val
      k =      2             // keep k
      nums[0,1]

      step.5
      i =          4
      [0,1,2,2,3,0,4,2]. // nums[2] = nums[4]
      k =      2             // next
      nums[0,1,3]

      step.6
      i =            5
      [0,1,2,2,3,0,4,2]. // nums[3] = nums[5]
      k =        3           // next
      nums[0,1,3,0]

      step.7
      i =              6
      [0,1,2,2,3,0,4,2]. // nums[4] = nums[6]
      k =          4         // next
      nums[0,1,3,0,4]

      step.8
      i =                7
      [0,1,2,2,3,0,4,2]. // remove val
      k =          4         // next
      nums[0,1,3,0,4]
    </pre> */

// <strong>Code 2:</strong>
var removeElement = function (nums: number[], val: number): number {
  let index = nums.indexOf(val);

  while (index !== -1) {
    nums.splice(index, 1);
    index = nums.indexOf(val);
  }
  return nums.length;
};
