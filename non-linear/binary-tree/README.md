# 🌳 Binary Tree Traversals: Pre-order, In-order e Post-order

As três travessias mais comuns em árvores binárias são variações de **Depth-First Search (DFS)**. A diferença está na ordem em que os nós são visitados.

## Exemplo de árvore para referência

    1

/ \
 2 3
/ \ \
4 5 6

## 📌 1. Pre-order Traversal (N → L → R)

Visita primeiro o **nó atual**, depois a **subárvore da esquerda** e por fim a **subárvore da direita**.

### 🧠 Ordem dos nós visitados:

### 💻 Código:

```js
function preOrder(root) {
  if (!root) return;
  console.log(root.val); // Visita o nó
  preOrder(root.left); // Vai para a esquerda
  preOrder(root.right); // Vai para a direita
}
```
