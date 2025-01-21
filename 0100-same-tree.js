//Blog: https://www.allenliservice.online/leetcode-js-100-same-tree/

// <strong>solution:</strong>
// 1. 建立 recursion 的遞迴函式。
// 2. 如果兩個 node 皆為 null，則為 true。
// 3. 如果兩個 node 其中一個為 null，則為 false。
// 4. 如果兩個 node 數值不同，則為 false。
// 5. 運用遞迴函式來執行左右子樹的各自比較。

// <strong>Code 1:</strong>
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var isSameTree = function (p, q) {
  return recursion(p, q);
};

var recursion = function (p, q) {
  //如果兩個 node 皆為 null，則為 true。
  if (!p && !q) return true;
  //如果兩個 node 其中一個為 null，則為 false。
  if (!p || !q) return false;
  //如果兩個 node 數值不同，則為 false。
  if (p.val !== q.val) return false;

  //運用遞迴函式來執行左右子樹的各自比較。
  return recursion(p.left, q.left) && recursion(p.right, q.right);
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
TreeNode {
  val: 1,
  left: TreeNode { val: 2, left: null, right: null },
  right: TreeNode { val: 3, left: null, right: null }
}
TreeNode {
  val: 1,
  left: TreeNode { val: 2, left: null, right: null },
  right: TreeNode { val: 3, left: null, right: null }
}
return true;
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
TreeNode {
  val: 1,
  left: TreeNode { val: 2, left: null, right: null },
  right: null
}
TreeNode {
  val: 1,
  left: TreeNode {
    val: null,
    left: TreeNode { val: 2, left: null, right: null },
    right: null
  },
  right: null
}
return false;
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
TreeNode {
  val: 1,
  left: TreeNode { val: 2, left: null, right: null },
  right: TreeNode { val: 1, left: null, right: null }
}
TreeNode {
  val: 1,
  left: TreeNode { val: 1, left: null, right: null },
  right: TreeNode { val: 2, left: null, right: null }
}
return false;
</pre> */
