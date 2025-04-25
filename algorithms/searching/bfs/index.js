function maxDepthBFS(root) {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    // Increment depth after processing all nodes at the current level
    depth++;
  }

  return depth;
}
