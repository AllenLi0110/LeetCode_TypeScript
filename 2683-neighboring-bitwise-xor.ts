//Blog: https://allenliservice.online/leetcode-ts-2683-neighboring-bitwise-xor/

// <strong>Solution: </strong>
// 根據題意，每個 derived[i] = original[i] ⊕ original[i + 1]，
// 如果把所有的 derived 的值全部 XOR 起來：
// 每個 original 都會被 XOR 兩次，所以互相抵銷，
// 結果必須是 0 才可能成立。
// 所以我們用 reduce((acc, cur) => acc ^ cur, 0) 將累積值 acc 與當前值 cur 依序做 XOR，
// 最後檢查最終結果是否為 0 即可。

// <strong>Code 1: BigO(n)</strong>
function doesValidArrayExist(derived: number[]): boolean {
    return (derived.reduce((acc, cur) => acc ^ cur, 0) === 0);
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: derived = [1,1,0]

Step 0: acc = 0, cur = 1, acc ^ cur = 1
Step 1: acc = 1, cur = 1, acc ^ cur = 0
Step 2: acc = 0, cur = 0, acc ^ cur = 0
Final XOR result: 0
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: derived = [1,1]

Step 0: acc = 0, cur = 1, acc ^ cur = 1
Step 1: acc = 1, cur = 1, acc ^ cur = 0
Final XOR result: 0
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: derived = [1,1]

Step 0: acc = 0, cur = 1, acc ^ cur = 1
Step 1: acc = 1, cur = 0, acc ^ cur = 1
Final XOR result: 1
</pre> */