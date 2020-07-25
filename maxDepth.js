/*Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Note: A leaf is a node with no children.
Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var root = {
  // 104
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};
console.log(JSON.stringify(root));
var level = 0,
  max = 0;
function maxDepth(root) {
  if (root == undefined) {
    return;
  }
  level++;
  if (level > max) {
    max = level;
  }
  maxDepth(root.left);
  maxDepth(root.right);
  level--;
}
maxDepth(root);

console.log('Max : ' + max);
//console.log(maxDepth(root));
