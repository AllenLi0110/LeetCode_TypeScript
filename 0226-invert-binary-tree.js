//Blog: https://www.allenliservice.online/leetcode-js-226-invert-binary-tree/

// <strong>solution:</strong>
// 1. 程式碼開頭有一個對二元樹節點的定義，即 TreeNode 函式>
// 2. 每個節點都有一個值 val，以及指向左子節點和右子節點的指標 left 和 right。
// 3. 接著執行 invertTree，它接受一個二元樹的根節點作為參數，並執行其中的 recursion。
// 4. 接著運用解構賦值中的交換變數來翻轉該二元樹的結構。

//<strong>Code 1:</strong>
// ES5
//Definition for a binary tree node.
// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

//ES6+
//Definition for a binary tree node.
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var invertTree = function (root) {
  traverse(root);
  return root;
};

var traverse = function (root) {
  if (root === null) return;

  let temp = root.right;
  root.right = root.left;
  root.left = temp;
  //[root.left, root.right] = [root.right, root.left]

  traverse(root.left);
  traverse(root.right);
};

{
  /* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
let test1 = new TreeNode(4,
  new TreeNode(2,
    new TreeNode(1),
    new TreeNode(3)
  ),
  new TreeNode(7,
    new TreeNode(6),
    new TreeNode(9)
  )
); //[4,2,7,1,3,6,9]

let ans1 = new TreeNode(4,
    new TreeNode(7,
        new TreeNode(9),
        new TreeNode(6)
    ),
    new TreeNode(2,
        new TreeNode(3),
        new TreeNode(1)
    )
); //[4,7,2,9,6,3,1]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
let test2 = new TreeNode(2,
    new TreeNode(1),
    new TreeNode(3)
); //[2,1,3]

let ans2 = new TreeNode(2,
    new TreeNode(3),
    new TreeNode(1)
); //[2,3,1]
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
let test3 = new TreeNode(); //[]
let ans3 = new TreeNode() //[]
</pre> */
}
