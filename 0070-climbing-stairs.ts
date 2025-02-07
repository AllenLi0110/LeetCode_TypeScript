//Blog: https://www.allenliservice.online/leetcode-js-70-climbing-stairs/

// <strong>Solution:</strong>
// <pre style='background-color:#ggg'>
// 1. 先獨立出 n <= 1的情況
// 2. 宣告 [one, two] = [1, 1]
// 分別是各一個步驟(one = 1次1階梯, two = 1次2階梯)
// 3. 宣告 i = 2 ，兩種步驟
// 4. 設立「For迴圈」
// temp = 紀錄上個one的可行步驟
// one = one(上上次的步驟)
//       +
//       two(上次的步驟)
// two = 紀錄這次temp的可行步驟
// ex. 每一次的迴圈代表前兩組的步驟相加，因為順序不同仍須計算為一次步驟
// </pre>

//<strong>Code 1: BigO(n)</strong>
var climbStairs = function (n:number):number {
  if (n <= 1) return 1;
  if (n === 2) return 2;

  let [one, two]: [number, number] = [1, 1];
  for (let i = 2; i <= n; i++) {
    let temp: number = one;
    one = one + two;
    two = temp;
  }
  return one;
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input = 2
(i = 2; i < = 2; i++)

case1 => i = 1, steps = 1 (1次1階梯)
case2 => i = 2, steps = 1 + 1 = 2 (1次1階梯 + 1次2階梯)

return one = 2
</pre> */

//<strong>Code 2: BigO(n)</strong>
var climbStairs = function (n: number): number {
  if (n <= 1) return 1;
  if (n === 2) return 2;

  let newArray: number[] = [0, 1, 2]; 
  for (let i = 3; i <= n; i++) {
    newArray[i] = newArray[i - 2] + newArray[i - 1];
  }
  return newArray[n];
};
