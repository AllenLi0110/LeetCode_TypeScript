//Blog: https://www.allenliservice.online/leetcode-js-67-add-binary/

// <strong>Solution:</strong>
// 1. 先了解二進位的規則。
// <pre style='background-color:#ggg'>
//   (ex.如下 a + b = 2
//   a   = 0001
//   b   = 0001
//  a + b = 0010 //2^1 = 2
// </pre>
// 2. 我們可以了解到「1 + 1 = 2」。
// 3. 此時在「個位」的位置變成「0」，且在「十位」的位置加「1」，依序計算。

var addBinary = function (a, b) {
  let result = "",
    carry = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    if (i >= 0) carry += Number(a[i]);
    if (j >= 0) carry += Number(b[j]);
    result = (carry & 1) + result; //使用 & 來找出carry 和 1 相同的二進制
    carry >>= 1; //將carry的值右移
  }
  return carry ? "1" + result : result;
  //carry = 1 => true => "1" + result
  //carry = 0 => false =>   result
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
step.1
i = a.length - 1 => 2 - 1 = 1 ; carry += 0 + 1 = 1
j = b.length - 1 => 1 - 1 = 0 ; carry += 1 + 1 = 2
result = carry & 1 + result => 2 & 1 + "" => "0" + "" = "0"
ex: carry & 1
   由 0010 => carry
   上 0001 =>   1
   往 ----
   下 0000
carry >>1 = 0010 => 0001

step.2
i = 1 - 1 = 0  ; carry += 2 + 0 = 2
j = 1 - 1 = -1 ; carry += 3 + -1 = 2
result = carry & 1 + result => 2 & 1 + "0" => "0" + "0" = "00"
ex: carry & 1
   由 0010 => carry
   上 0001 =>   1
   往 ----
   下 0000
carry >>1 = 0010 => 0001

step.3
return carry ? "1" + result : result
          1  ?  "1" + "00"  : "00"     
        true      "100"
</pre> */

// <strong>Code 2:</strong>
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

/*
const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// ↪ 9007199254740991n
*/
