//Blog: https://allenliservice.online/leetcode-ts-1002-find-common-characters/

// <strong>Solution: </strong>
// 這題我們可以先建立一個陣列裡面放著字母 1~26 的最大安全整數，
// 接著我們知道小寫的 a 在 ASCII 碼為 97，
// 這可以方便我們後續把找出的重複字母轉換成字串。
// 接著我們遍歷 words 陣列裡面的每個 word，
// 並且用 counting array 的方式把它記錄到長度為 26 的陣列中，
// 此時就可以比較找最小的次數，這樣可以同時將沒有出現過次數的字母給予 0 次以外，
// 也可以依序在每個 word 中保留各字母出現的最小次數，
// 最後就是將 ASCII 碼轉為英文字母小寫的字串即可。

// <strong>Code 1: BigO(n x m)</strong>
function commonChars(words: string[]): string[] {
    const arr: number[] = new Array(26).fill(Number.MAX_SAFE_INTEGER);
    const aCode: number = "a".charCodeAt(0);
    
    for (const word of words) {
        const count: number[] = new Array(26).fill(0);
        for (let i = 0; i < word.length; i++) {
            const char: number = word.charCodeAt(i) - aCode;
            count[char]++;            
        }
        for (let i = 0; i < 26; i++) {
            arr[i] = Math.min(arr[i], count[i])
        }
    }  
    const res: string[] = [];
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < arr[i]; j++) {
            res.push(String.fromCharCode(i + aCode));
        }
    }
    return res
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: words = ["bella","label","roller"]

word bella
count [
  1, 1, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 2, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]
arr [
  1, 1, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 2, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]

word label
count [
  1, 1, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 2, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]
arr [
  1, 1, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 2, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]

word roller
count [
  0, 0, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 2, 0, 0, 1, 0,
  0, 2, 0, 0, 0, 0, 0, 0,
  0, 0
]
arr [
  0, 0, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 2, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]
return res; // [ 'e', 'l', 'l' ]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: words = ["cool","lock","cook"]

word cool
count [
  0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 0, 0, 2, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]
arr [
  0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 0, 0, 2, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]

word lock
count [
  0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]
arr [
  0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]

word cook
count [
  0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 2, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]
arr [
  0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]
return res; // [ 'c', 'o' ]
</pre> */