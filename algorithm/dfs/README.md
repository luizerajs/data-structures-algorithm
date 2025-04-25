## DFS - Busca em profundidade (Depth First Search)

### Complexidade de Tempo

- **O(V)**, onde `V` é o número de vértices (nós).

### Complexidade de Espaço

- **O(H)**, onde `H` é a altura da árvore. No pior caso (árvore desbalanceada), pode ser **O(V)**.

### Descrição

Este algoritmo calcula a profundidade máxima de uma árvore binária usando a abordagem de Busca em Profundidade (DFS).

### Função: `maxDepthDFS(root)`

#### Parâmetros:

- **`root`**: O nó raiz da árvore binária. Cada nó deve ter as seguintes propriedades:
  - `left` (Object|null): O nó filho à esquerda.
  - `right` (Object|null): O nó filho à direita.

#### Retorno:

- **`number`**: A profundidade máxima da árvore binária. Retorna `0` se a árvore estiver vazia.

### Como Funciona:

1. Se a raiz for `null`, a função retorna imediatamente `0`, pois a árvore está vazia.
2. A função é chamada recursivamente para calcular a profundidade das subárvores esquerda e direita.
3. A profundidade máxima é calculada como o maior valor entre as profundidades das subárvores esquerda e direita, somado a `1` (para incluir o nó atual).
4. O valor final é retornado após a recursão atingir todos os nós da árvore.

### Por Que DFS?

Esta abordagem utiliza DFS porque explora cada caminho da árvore até o final antes de retroceder. Isso é ideal para calcular a profundidade máxima, pois permite comparar as profundidades de todas as subárvores de forma eficiente. A recursão simplifica a implementação ao lidar com a estrutura hierárquica da árvore.
