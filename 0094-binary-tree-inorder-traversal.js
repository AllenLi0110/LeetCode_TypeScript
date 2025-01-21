//Blog: https://www.allenliservice.online/leetcode-js-94-binary-tree-inorder-traversal/
//Binary Tree Traversal: https://ithelp.ithome.com.tw/articles/10289291

// <strong>solution:</strong>
// 1. 首先，我們要知道 Inorder traversal(中序遍歷)所指的方向，接著:
// 2. 我們在 inorderTraversal(root) 的函式中接受 binary tree 的輸入，並透過 dfs來完成中序遍歷的結果。
// 3. 在 dfs(node, result) 中，我們先判斷 node 是否為 null，如果是則直接返回。
// 4. 如果 node 不是 null，代表該節點有值，我們開始做中序遍歷：
// 4-1. dfs(node.left, result): 使用遞迴對左子樹進行中序遍歷。
// 4-2. result.push(node.val): 將當前節點的值加入到 result 陣列中。
// 4-3. dfs(node.right, result): 使用遞迴對右子樹進行中序遍歷。
// 5. 這種遍歷方式首先遍歷左子樹，然後訪問當前節點，最後遍歷右子樹。這一切都是遞迴的方式來完成，代表每一個子樹（無論是左還是右）都會被同樣的方式遍歷。
// <pre style='background-color:#ggg'>
// ex.
// 中序遍歷步驟：
// 1. 遍歷左子樹
// 2. 訪問當前節點
// 3. 遍歷右子樹
//
// 附上示意圖: https://ithelp.ithome.com.tw/articles/10289291
// </pre>

// <strong>Code 1: DFS</strong>;
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
var inorderTraversal = function (root) {
  let result = [];
  dfs(root, result);
  return result;
};

function dfs(node, result) {
  if (!node) return;

  dfs(node.left, result);
  result.push(node.val);
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
  new TreeNode(3)
  new TreeNode(2)
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
