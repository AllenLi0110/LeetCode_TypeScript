//Blog: https://allenliservice.online/leetcode-ts-2641-cousins-in-binary-tree-ii/

// <strong>Solution: </strong>
// 一開始先確認 root 是否存在，若不存在直接回傳，
// 而當根節點沒有同層的 cousins，因此將其值設為 0。
// 接著使用 queue 進行 BFS，每次迭代處理一層的節點：
// 先遍歷當層節點，計算下一層所有子節點的總和 levelSum，並將子節點加入 next。
// 之後再根據公式：newValue = levelSum - siblingSum，更新下一層節點的值。
// 最後持續迭代直到整棵樹處理完成。

// <strong>Code 1: BigO(n)</strong>
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    root.val = 0;
    let queue: TreeNode[] = [root];

    while (queue.length) {
        const next: TreeNode[] = [];
        let levelSum = 0;
        for (const node of queue) {
            if (node.left) {
                levelSum += node.left.val;
                next.push(node.left);
            }
            if (node.right) {
                levelSum += node.right.val;
                next.push(node.right);
            }
        }

        for (const node of queue) {
            const siblingSum: number = (node.left?.val ?? 0) + (node.right?.val ?? 0);
            if (node.left) node.left.val = levelSum - siblingSum;
            if (node.right) node.right.val = levelSum - siblingSum;
        }
        queue = next;
    }
    return root;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: root = [5,4,9,1,10,null,7]

Next-level original values: [ 4, 9 ]
LevelSum: 13
Next-level updated values: [ 0, 0 ]
Next-level original values: [ 1, 10, 7 ]
LevelSum: 18
Next-level updated values: [ 7, 7, 11 ]
Next-level original values: []
LevelSum: 0
Next-level updated values: []

return root; // [0,0,0,7,7,null,11]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
Input: root = [3,1,2]

Next-level original values: [ 1, 2 ]
LevelSum: 3
Next-level updated values: [ 0, 0 ]
Next-level original values: []
LevelSum: 0
Next-level updated values: []

return root; // [0,0,0]
</pre> */
