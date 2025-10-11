//Blog: https://allenliservice.online/leetcode-ts-954-array-of-doubled-pairs/

// <strong>Solution: </strong>
// 從題意我們可以知道我們可以重新排列陣列裡元素的順序，
// 同時我們需要兩兩配對，確保而後一個恰好是前一個的兩倍 arr[2 * i + 1] = 2 * arr[2 * i]。
// 這個過程我們需要注意幾個重點：
// 1. 陣列元素內使用的次數，不能重複，因為需要配對。(ex. HashTable 來計算次數)
// 2. 接著我們要比較的是倍數，所以在不論正負數的情況下，我們按照絕對值下去從小到大排序，確保小的先配對。
// 3. 配對成功的兩個元素皆需要扣除，遍歷配對的元素就不需要配對。
// 4. 如果無法配對或要配對數值的兩倍已無次數，則回傳 false，否則回傳 true。

// <strong>Code 1: BigO(n log n)</strong>
function canReorderDoubled(arr: number[]): boolean {
    let hashTable: Record<string, number> = {}
    for (let num of arr) {
        hashTable[num] = (hashTable[num] || 0) + 1;
    }     
    arr.sort((a, b) => Math.abs(a) - Math.abs(b))    
    for (let num of arr) {
        if (hashTable[num] === 0) continue;
        const doubledNum = num * 2;
        if (!hashTable[doubledNum] || hashTable[doubledNum] <= 0) {
            return false;
        }
        hashTable[num]--;
        hashTable[doubledNum]--;
    }
    return true;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: arr = [3,1,3,6]

hashTable { '1': 1, '3': 2, '6': 1 }
arr [ 1, 3, 3, 6 ]

num 1, doubledNum 2, !hashTable[doubledNum] true, hashTable[doubledNum] <= 0 false // return false; 找不到當前元素的兩倍值
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: arr = [2,1,2,6]

hashTable { '1': 1, '2': 2, '6': 1 }
arr [ 1, 2, 2, 6 ]

num 1, doubledNum 2, !hashTable[doubledNum] false, hashTable[doubledNum] <= 0 false
num 2, doubledNum 4, !hashTable[doubledNum] true, hashTable[doubledNum] <= 0 false // return false; 找不到當前元素的兩倍值
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: arr = [4,-2,2,-4]

hashTable { '2': 1, '4': 1, '-2': 1, '-4': 1 }
arr [ -2, 2, 4, -4 ]

num -2, doubledNum -4, !hashTable[doubledNum] false, hashTable[doubledNum] <= 0 false
num 2, doubledNum 4, !hashTable[doubledNum] false, hashTable[doubledNum] <= 0 false
num 4 // 已被配對
num -4 // 已被配對

return true; // 回圈順利走完，結束。
</pre> */
