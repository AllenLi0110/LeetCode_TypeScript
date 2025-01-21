//Blog:https://www.allenliservice.online/integer-to-roman-js-leetcode/

// <strong>Code 1:</strong>
function toRoman(num) {
  const romanMap = {
    //宣告羅馬數字的特殊字串對應阿拉伯數字
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumber = ""; //宣告字串空間

  for (let key in romanMap) {
    let repeatCounter = Math.floor(num / romanMap[key]); //確認num被romanMap[key]整除的次數

    if (repeatCounter !== 0) {
      romanNumber += key.repeat(repeatCounter); //則執行取字串*次數
    }
    num %= romanMap[key]; // x = x % y 更新num等於餘數
    if (num === 0) return romanNumber; //如果次數等於「0」，回傳romanNumber=''的值
  }
  return romanNumber;
}

/*  < strong > FlowChart:</strong>
<pre style='background-color:#ggg'>
No.1 驗證「2999」迴圈過程：
<pre style='background-color:#eee'>
迴圈.1
Math.floor(2999 / 1000) = 2
result += M.repeat(2) = MM
2999 = 2999 % 1000 = 999

迴圈.2
Math.floor(999 / 900) = 1
result += CM.repeat(1) = MMCM
999 = 999 % 900 = 99

迴圈.3
Math.floor(99 / 500) = 0
result += D.repeat(0) = MMCM
99 = 99 % 500 = 99

迴圈.4
Math.floor(99 / 400) = 0
result += CD.repeat(0) = MMCM
99 = 99 % 400 = 99

迴圈.5
Math.floor(99 / 100) = 0
result += C.repeat(0) = MMCM
99 = 99 % 100 = 99

迴圈.6
Math.floor(99 / 90) = 1
result += XC.repeat(1) = MMCMXC
99 = 99 % 90 = 9

迴圈.7
Math.floor(9 / 50) = 0
result += L.repeat(0) = MMCMXC
9 = 9 % 50 = 9

迴圈.8
Math.floor(9 / 40) = 0
result += XL.repeat(0) = MMCMXC
9 = 9 % 40 = 9

迴圈.9
Math.floor(9 / 10) = 0
result += X.repeat(0) = MMCMXC
9 = 9 % 10 = 9

迴圈.10
Math.floor(9 / 9) = 1
result += IX.repeat(1) = MMCMXCIX
9 = 9 % 9 = 0

迴圈.11
Math.floor(0 / 5) = 0
result += V.repeat(0) = MMCMXCIX
0 = 0 % 5 = 0

迴圈.12
Math.floor(0 / 4) = 0
result += IV.repeat(0) = MMCMXCIX
0 = 0 % 4 = 0

迴圈.13
Math.floor(0 / 1) = 0
result += I.repeat(0) = MMCMXCIX
0 = 0 % 1 = 0
</pre>

No.2 驗證「0」迴圈過程：
<pre style='background-color:#eee'>

Math.floor(0 / 1) = 0
result += I.repeat(0) = ''
0 = 0 % 1 = 0
</pre> */

// < strong > Code 2:</strong
function intToRoman(num: number): string {
  const romanMap: [string, number][] = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let romanNumber = "";

  for (const [symbol, value] of romanMap) {
    const repeatCounter = Math.floor(num / value);
    num %= value;
    romanNumber += symbol.repeat(repeatCounter);
    if (num === 0) break;
  }
  return romanNumber;
}
