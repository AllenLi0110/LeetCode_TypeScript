//Blog: https://allenliservice.online/leetcode-ts-2506-count-pairs-of-similar-strings/

// <strong>Solution: </strong>
// 首先，我們從題目給的例子中，我們需要整理 word 中的字串，
// 我們發現 "abca", "cba" 移除重複之後的 "a", "b", "c" = "abc" ，
// 是相似的組合可以進行配對。
// 而要達成這個判斷，我們會需要一個表，一個紀錄字串組合與次數的表。
// (ex. 這裡我用 HashMap (雜湊結構) 會比 HashTable (物件操作)的做法，在存取上更有效率。)
// 接著我們就要計算 map 中每個字母組合出現的次數，這裡用簡單的組合公式(n * (n - 1)) / 2，來快速計算兩兩配對的數量。
// (ex. 組合公式 C(n,2) = n * (n − 1) / 2 ，從 n 個元素中任選 2 個，不分順序的組合數)

// <strong>Code 1: BigO(n * m log m)</strong>
function similarPairs(words: string[]): number {
    const map: Map<string, number> = new Map();
    let pairs: number = 0;
    for (const word of words) {
        const key: string = [...new Set(word)].sort().join("");
        map.set(key, (map.get(key) || 0) + 1);
    }    
    for (const count of map.values()) {
        pairs += (count * (count - 1)) / 2; 
    }
    return pairs;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: words = ["aba","aabb","abcd","bac","aabc"]

map Map(3) { 'ab' => 2, 'abcd' => 1, 'abc' => 2 }

count 2, pairs 1
count 1, pairs 1
count 2, pairs 2
return pairs // 2
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: words = ["aabb","ab","ba"]

map Map(1) { 'ab' => 3 }

count 3, pairs 3
return pairs // 3
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
Input: words = ["nba","cba","dba"]

map Map(3) { 'abn' => 1, 'abc' => 1, 'abd' => 1 }

count 1, pairs 0
count 1, pairs 0
count 1, pairs 0
return pairs // 0
</pre> */