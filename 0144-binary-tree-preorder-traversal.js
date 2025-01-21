//Blog: https://www.allenliservice.online/leetcode-js-144-binary-tree-preorder-traversal/
//Binary Tree Traversal: https://ithelp.ithome.com.tw/articles/10289291

// <strong>solution:</strong>
// 1. 首先，我們要知道 Preorder traversal(前序遍歷)所指的方向，接著:
// 2. 我們在 preorderTraversal(root) 的函式中接受 binary tree 的輸入，並透過 dfs 來完成前序遍歷的結果。
// 3. 在 dfs(node, result) 中，我們先判斷 node 是否為 null，如果是則直接返回。
// 4. 如果 node 不是 null，代表該節點有值，我們開始做前序遍歷：
// 4-1. result.push(node.val): 將當前節點的值加入到 result 陣列中。
// 4-2. dfs(node.left, result): 使用遞迴對左子樹進行前序遍歷，持續走到左子樹最底層。
// 4-3. dfs(node.right, result): 使用遞迴對右子樹進行前序遍歷。
// 5. 這種遍歷方式首先訪問當前節點，然後遍歷左子樹，最後遍歷右子樹。這一切都是遞迴的方式來完成。
// <pre style='background-color:#ggg'>
// ex.
// 中序遍歷步驟：
// 1. 訪問當前節點
// 2. 遍歷左子樹(直至最底層)
// 3. 遍歷右子樹

// 附上示意圖: https://ithelp.ithome.com.tw/articles/10289291
// </pre>

// <strong>Code 1: DFS</strong>
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var preorderTraversal = function (root) {
  let result = [];
  dfs(root, result);
  return result;
};

function dfs(node, result) {
  if (!node) return;
  result.push(node.val);
  dfs(node.left, result);
  dfs(node.right, result);
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
const rootNode = new TreeNode(
  1,
  null,
  new TreeNode(
    2,
    new TreeNode(3),
    null,
  )
);

const rootNode = new TreeNode(
  1,
  new TreeNode(2)
  new TreeNode(3)
);
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
const rootNode = []
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
TreeNode { val: 1, left: null, right: null }
</pre> */

// <strong>Code 2: DFS</strong>
var preorderTraversal = function (root) {
  let result = [];
  dfs(root);
  return result;

  function dfs(root) {
    if (root === null) return;

    result.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }
};
