//Blog: https://allenliservice.online/leetcode-ts-1952-three-divisors/


// <strong>Solution: </strong>
// 這題題目要求要判斷有三個正因數，也就是符合這個數值特性 `1, √n, n` 三個正因數。
// 通常一個數字會有 1 與 n 本身，0 除外。
// 我們先取得 √n，並且確認 √n * √n 是否等於 n ，以此判斷是否為整數平方數。
// 接著我們遍歷 2 -> n 之間的數值，因為 0 不是正因數，1 已在正因數的計算內，
// 接下來我們確保 n 是否會被這些數值整除，
// 以此判斷他是否為質數，且該數大於 0，則為答案 true。

// <strong>Code 1: BigO(√√n)</strong>
function isThree(n: number): boolean {
    let sqrt: number = Math.floor(Math.sqrt(n));
    if (sqrt * sqrt !== n) return false;
    for (let i = 2; i * i <= sqrt; i++) {
        if (sqrt % i === 0) return false;
    }
    return sqrt > 1;
};

// <strong>Code 2: BigO(n)</strong>
function isThree(n: number): boolean {
    let count = 0;
    for (let i = 1; i < n; i++) {        
        if (n % i === 0) {
            count++;
        } 
    }
    return count === 3; 
};


/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 2

sqrt 1 //取整數平方根
sqrt * sqrt = 1,  n = 2
return false;
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: n = 4

sqrt 2
sqrt * sqrt 4 n 4
return sqrt > 1 // true
</pre> */