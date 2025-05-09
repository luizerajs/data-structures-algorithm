# O que é uma Árvore Binária?

Uma **árvore binária** é uma estrutura de dados hierárquica onde cada nó pode ter no máximo dois filhos:

- **Filho à esquerda** (left child)
- **Filho à direita** (right child)

## Propriedades

1. O nó superior é chamado de **raiz**.
2. Cada nó pode ter 0, 1 ou 2 filhos.
3. Os nós sem filhos são chamados de **folhas**.

## Exemplo

```plaintext
        10
       /  \
      5    15
     / \   / \
    3   7 12  18
```

## 🌳 Binary Tree Traversals: Pre-order, In-order e Post-order

As três travessias mais comuns em árvores binárias são variações de **Depth-First Search (DFS)**. A diferença está na ordem em que os nós são visitados.

## Exemplo de árvore para referência

```
  1
 / \
 2 3
/ \ \
4 5 6

```

## 📌 1. Pre-order Traversal (N → L → R)

Visita primeiro o **nó atual**, depois a **subárvore da esquerda** e por fim a **subárvore da direita**.

### 🧠 Ordem dos nós visitados:

1 → 2 → 4 → 5 → 3 → 6

### 💻 Código:

```js
function preOrder(root) {
  if (!root) return;
  console.log(root.val); // Visita o nó
  preOrder(root.left); // Vai para a esquerda
  preOrder(root.right); // Vai para a direita
}
```

## 📌 2. In-order Traversal (L → N → R)

Visita primeiro a **subárvore da esquerda**, depois o **nó atual** e por fim a **subárvore da direita**.

### 🧠 Ordem dos nós visitados:

4 → 2 → 5 → 1 → 3 → 6

### 💻 Código:

```js
function inOrder(root) {
  if (!root) return;
  inOrder(root.left); // Vai para a esquerda
  console.log(root.val); // Visita o nó
  inOrder(root.right); // Vai para a direita
}
```

## 📌 3. Post-order Traversal (L → R → N)

Visita primeiro a **subárvore da esquerda**, depois a **subárvore da direita** e por fim o **nó atual**.

### 🧠 Ordem dos nós visitados:

4 → 5 → 2 → 6 → 3 → 1

### 💻 Código:

```js
function postOrder(root) {
  if (!root) return;
  postOrder(root.left); // Vai para a esquerda
  postOrder(root.right); // Vai para a direita
  console.log(root.val); // Visita o nó
}
```

## 🌳 Informações Relevantes sobre Árvores Binárias

- **Árvore Binária**: Cada nó pode ter no máximo dois filhos, chamados de "esquerda" e "direita".
- **Altura da Árvore**: O número máximo de arestas do nó raiz até uma folha.
- **Árvore Balanceada**: Uma árvore onde a diferença de altura entre as subárvores esquerda e direita de qualquer nó é no máximo 1.
- **Aplicações**:
  - Representação de expressões matemáticas.
  - Estruturas de dados como heaps e árvores de busca binária.
  - Algoritmos de compressão, como Huffman.
