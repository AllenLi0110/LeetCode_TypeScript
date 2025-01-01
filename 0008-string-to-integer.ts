//Blog:https://www.allenliservice.site/leetcode-js-8-string-to-integer-atoi/

//<strong>solution:</strong>
//1.確認數值的正負狀態
//  如果是「+」，則default = 1
//  如果是「-」，則default = -1
//2.確認數值是否為整數
//  移除前後空白
//3.確認數值後是否有文字
//  移除不考慮
//4.數值的處理
//  詳請閱FlowChart

var myAtoi = function (s: string): number {
  let index: number = 0;
  while (s[index] === " ") {
    index++;
  }

  let sign: number = 1; //default to '+'
  if (s[index] === "+") {
    sign = 1;
    index++;
  } else if (s[index] === "-") {
    sign = -1;
    index++;
  }

  const digits: Record<string, number> = {};
  for (let i = 0; i < 10; i++) {
    digits[i + ""] = i;
  }
  let result: number = 0;
  for (let i = index; i < s.length; i++) {
    if (digits[s[i]] !== undefined) {
      result = result * 10 + digits[s[i]];
    } else {
      break;
    }
  }

  result = result * sign;
  if (result < -1 * Math.pow(2, 31)) {
    result = -1 * Math.pow(2, 31);
  } else if (result > Math.pow(2, 31) - 1) {
    result = Math.pow(2, 31) - 1;
  }
  return result;
};

/* strong>Example 1</strong>
<pre style='background-color:#ggg'>
result = 0
result = result * 10 + digits[s[i]] => 0 + 4 = 4
result = result * 10 + digits[s[i]] => 4 * 10 + 2 = 42
</pre>
<pre style='background-color:#ggg'>
Output = 42
</pre> */

//<strong>Code 2</strong>
var myAtoi = function (s: string): number {
  const res: number = parseInt(s) || 0;

  if (res > 2 ** 31 - 1) return 2 ** 31 - 1;
  if (res < 2 ** 31 * -1) return 2 ** 31 * -1;
  return res;
};
