//Blog: http://allenliservice.online/leetcode-js-202-happy-number/

// <strong>Solution:</strong>
// 1. 因為最終會以個位數進行判斷，而 1 - 9 中只有 1, 7 是快樂數字，所以設定 while (n > 6) { }，小於 6 的數值直接判斷是否為 1。
// 2. 將 n 透過 toString() 轉乘字串，並使用 split("") 將字串拆分出來，透過 forEach 來把每個數值平方後相加。
// 3. 如果 n 是個位數，則由 0 開始加總。
// 4. 最終判斷 n 是否等於 1。

// <strong>Code 1: bigO(n)</strongc>
var isHappy = function (n) {
  while (n > 6) {
    n.toString()
      .split("")
      .forEach(function (element, index) {
        if (index === 0) n = 0;
        n += element * element;
      });
  }
  return n === 1;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: n = 19

n = 1^2 + 9&2 = 1 + 81 = 82
n = 8^2 + 2&2 = 64 + 4 = 68
n = 6^2 + 8&2 = 36 +64 = 100
n = 1^2 + 0^2 + 0^2 = 1

return n === 1 //true */

// <strong>Code 2: bigO(n)</strongc>
var isHappy = function (n) {
  const set = new Set().add(1);

  while (!set.has(n)) {
    set.add(n);
    let sum = 0;

    for (let c of String(n)) {
      sum += Number(c) * Number(c);
    }

    n = sum;
  }
  return n === 1;
};
