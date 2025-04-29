let root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};
// [4,2,7,1,3,6,9]
// expect: [4,7,2,9,6,3,1]

function invertTreeIterative(root) {
  if (!root) return null;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
}

function invertTreeRecursive(root) {
  if (!root) {
    return null;
  }

  const left = invertTreeRecursive(root.left);
  const right = invertTreeRecursive(root.right);

  root.left = right;
  root.right = left;

  return root;
}

console.log(invertTreeIterative(root));
console.log(invertTreeRecursive(root));
