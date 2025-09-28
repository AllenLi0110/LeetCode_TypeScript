//Blog: https://allenliservice.online/leetcode-ts-3697-compute-decimal-representation/

// <strong>Solution: </strong>
//這題可以看作是數學的題目，我們需要找出每個有效的數值，像是 0 在十位數的時候為無效數值，並乘上它所在位置對應的十進位倍數。
// 我們可以對應每個位數（個、十、百、千…等），並取出該位數字。
// 若數字為 0（例如十位數是 0），則該位數不需要採用計算。
// 否則，將數字乘以該位數的十進位倍數後存入結果。
// PS. 我一開始是用 unshift() 插入元素的做法，但是這種做法效率不佳(可見此文章備註說明)，后調整為正向累加結果後，再做反轉陣列的效果比較好。

// <strong>Code 1: BigO(n)</strong>
function decimalRepresentation(n: number): number[] {
    let num: number = n;
    let components: number[] = [];
    let placeValue = 1;

    while (num > 0) {
        const digit = num % 10;
        if (digit !== 0) {
            components.push(digit * placeValue);
        }
        num = Math.floor(num / 10);
        placeValue *= 10
    }
    return components.reverse();
};


/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: n = 537

digit 7, components [ 7 ], num 53, placeValue 10
digit 3, components [ 7, 30 ], num 5, placeValue 100
component [ 500, 30, 7 ] -> components.reverse() [ 500, 30, 7 ]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: n = 102

digit 2, components [ 2 ], num 10, placeValue 10
digit 0, components [ 2 ], num 1, placeValue 100
digit 1, components [ 2, 100 ], num 0, placeValue 1000
component [ 2, 100 ] -> components.reverse() [ 100, 2 ]
</pre> */