// Node Depths
// Write a funtion that takes in a Vinary Tree and returns the sum of its nodes' depth.

// Time: o(n) space: o(h) -> h is the height/depth of the Binary Tree

function nodeDepths(root, depth = 0) {
  if (root === null) {
    return 0;
  }
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
