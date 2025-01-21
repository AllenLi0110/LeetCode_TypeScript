//Blog:https://www.allenliservice.online/leetcode-js-13-roman-to-integer/

// < strong > Code 1:</strong >
var romanToInt = function (s: string): number {
  const romanMap: Record<string, number> = {
    //建立羅馬轉換表
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total: number = 0; //宣告待數字加總的空間

  for (let i = 0; i < s.length; i++) {
    //input字串決定i迴圈次數
    if (romanMap[s[i]] < romanMap[s[i + 1]]) {
      //如果 i 小於 i+1
      total += romanMap[s[i + 1]] - romanMap[s[i]]; //羅馬數字的規則，後面數字比前面大，須將後面減前面值
      i++; //i進到下一個順位
    } else {
      total += romanMap[s[i]];
    }
  }
  return total;
};

/*  < strong > FlowChart:</strong>
<pre style='background-color:#ggg'>
i = for loop
s.length = 7 ("MCMXCIV")

step.1
i = 0
romanMap[s[i]] = "M" = 1000
romanMap[s[i+1]] = "C" = 100
else {total = 0 + 1000 = 1000}

step.2
i = 1
romanMap[s[i]] = "C" = 100
romanMap[s[i+1]] = "M" = 1000
if (100 < 1000) {total = 1000 + 1000 - 100 = 1900}
i++

step.3
i = 3
romanMap[s[i]] = "X" = 10
romanMap[s[i+1]] = "C" = 100
if (10 < 100) {total = 1900 + 100 - 10 = 1990}
i++

step.4
i = 5
romanMap[s[i]] = "I" = 1
romanMap[s[i+1]] = "V" = 5
if (1 < 5) {total = 1990 + 5 - 1 = 1994}
i++

step.5
i = 7 
for i(7) < s.length(7) //條件不成立
break
</pre>

<strong>Answer:</strong>
<pre style='background-color:#ggg'>
Output = 1994
</pre> */

// < strong > Code 2:</strong >
var romanToInt = function (s: string): number {
  const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let i: number = 0,
    total: number = 0;

  while (i < s.length) {
    if (romanMap[s[i]] < romanMap[s[i + 1]] && i !== s.length - 1) {
      total += romanMap[s[i + 1]] - romanMap[s[i]];
      i += 2;
    } else {
      total += romanMap[s[i]];
      i++;
    }
  }
  return total;
};
