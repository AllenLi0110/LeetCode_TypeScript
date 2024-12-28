//Blog:https://www.allenliservice.site/leetcode-js-20-valid-parentheses/

//<strong>Solution:</strong>
// 1. 運用「for...of」將input進行迴圈，比對錯誤即回傳false
// 2. 當「if條件」符合左括號時，push()放入空陣列中
// 3. 當「if條件」出現右括號時，pop()比對上一次儲存的左括號
// 4. 最後當宣告的空陣列長度為0時，回傳ture

// <strong>Code 1: BigO(n)</strong>
var isValid = function (s: string): boolean {
  const array: string[] = [];
  const map: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      array.push(char);
    } else if (array.pop() !== map[char]) {
      return false;
    }
  }
  return !array.length;
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
step.1
char = '('
array = [] => array = ['(']

step.2
char = ')'
array.pop = ['('] => map[char] = ['(']
array.length === 0 => true
</pre> */

// <strong>Code 2: BigO(n)</strong>
var isValid = function (s: string): boolean {
  const array: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      array.push(")");
    } else if (s[i] === "{") {
      array.push("}");
    } else if (s[i] === "[") {
      array.push("]");
    } else if (array.pop() !== s[i]) {
      return false;
    }
  }
  return array.length === 0;
};
