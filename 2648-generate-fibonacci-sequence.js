//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day29-2648-generate-fibonacci-sequence/

// <strong>solution:</strong>
// 定義 generator (function*)生成器函式為一個斐波那契數列 fibGenerator：
// 首先，定義初始化變數 a 為 0，變數 b 為 1，這是斐波那契數列的起始值。
// 運用 while(true) 進入無窮迴圈，表示生成器會持續生成數列的項目。
// 並在每次迭代中，使用 yield a 這個關鍵字，將目前的 a 的值作為生成器的輸出，並且暫停生成器的執行。
// 接著，執行 b += a，將 b 的值加上 a，即將 b 更新為下一個斐波那契數列的值。
// 再來，執行 a = b - a，將 a 更新為 b 減去 a 的值，即將 a 更新為下一個斐波那契數列的值。
// 迴圈回到開頭，等待下一次迭代。
// 每次呼叫 gen.next().value，即可獲得生成器的輸出，
// 也就是斐波那契數列中的下一個項目，且只在需要時才生成一個項目，而不是一次性計算出整個數列。

// <strong>Code 1: BigO(n)</strong>
var fibGenerator = function* () {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    let temp = a;
    a = a + b;
    b = temp;
  }
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
console.log(gen.next()); //{ value: 0, done: false }
</pre> */

// <strong>Code 2: BigO(n)</strong>
var fibGenerator = function* () {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

// <strong>Code 3: Closure BigO(n)</strong>
function fibonacciGenerator() {
  let a = 0;
  let b = 1;

  function getNextFibonacci() {
    const result = a;
    [a, b] = [b, a + b];
    return result;
  }

  return getNextFibonacci;
}

const getNextFib = fibonacciGenerator();

console.log(getNextFib()); // 0
console.log(getNextFib()); // 1
console.log(getNextFib()); // 1
console.log(getNextFib()); // 2
console.log(getNextFib()); // 3
console.log(getNextFib()); // 5
console.log(getNextFib()); // 8
