//Blog: https://www.allenliservice.online/leetcode-js-102-binary-tree-level-order-traversal/
//Binary Tree Traversal: https://ithelp.ithome.com.tw/articles/10289291

// <strong>solution:</strong>
// 1. 首先，我們要知道 level order traversal(層序遍歷)所指的方向，接著:
// 2. 我們在 Level Order Traversal(root) 的函式中接受 binary tree 的輸入，並透過 bfs 來完成前序遍歷的結果。
// 3. 我們先判斷 node 是否為 null，如果是則直接返回。
// 4. 在 bfs(node, result) 中開始做 node 的遍歷。
// 5. 使用一個 queue 來儲存要訪問的節點。這是 BFS 的基本操作。
// 6. 在每一次的循環中，我們只考慮當前 queue 中的節點，也就是當前層級的所有節點。
// 7. 對於當前層級的每個節點，我們先將其從 queue 中移除，然後將其子節點（如果有的話）加入到 queue 中。
// 8. 訪問完當前層級的所有節點後，我們再繼續下一層級的節點，直到 queue 變空。

// <pre style='background-color:#ggg'>
// ex.
// 層序遍歷步驟：
// 1. 訪問當前節點
// 2. 遍歷左子樹
// 3. 遍歷右子樹
// 4. 訪問下一節點

// 附上示意圖: https://ithelp.ithome.com.tw/articles/10289291
// </pre>

// <strong>Code 1: BFS</strong>
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var levelOrder = function (root) {
  // 1. 檢查 root 是否為空
  if (!root) return [];

  // 2. 創建一個陣列來存放結果
  const result = [];

  // 3. 把根節點放入 BFS 函數中
  bfs(root, result);

  return result;
};

function bfs(node, result) {
  // 初始化
  const queue = []; // 創建一個隊列來存放節點
  queue.push(node);

  // 當隊列不為空時，繼續執行
  while (queue.length) {
    const len = queue.length;
    const row = [];
    // 對當前階層的每一個節點進行處理
    for (let i = 0; i < len; i++) {
      // 從隊列中取出一個節點
      const cur = queue.shift();

      // 如果這個節點有左子節點，則將其放入隊列中
      if (cur.left) queue.push(cur.left);
      // 如果這個節點有右子節點，則將其放入隊列中
      if (cur.right) queue.push(cur.right);

      // 將當前節點的值加入到 row 陣列中
      row.push(cur.val);
    }
    // 最後，將 row 陣列加入到 output 陣列中
    result.push(row);
  }
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
TreeNode {
  val: 3,
  left: TreeNode { val: 9, left: null, right: null },
  right: TreeNode {
    val: 20,
    left: TreeNode { val: 15, left: null, right: null },
    right: TreeNode { val: 7, left: null, right: null }
  }
}

TreeNode {
  val: 3,
  left: TreeNode { val: 9, left: null, right: null },
  right: TreeNode {
    val: 20,
    left: TreeNode { val: 15, left: null, right: null },
    right: TreeNode { val: 7, left: null, right: null }
  }
}
[ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
const rootNode = []
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
TreeNode { val: 1, left: null, right: null }
</pre> */
