## BFS - Busca em largura (Breadth First Search)

### Complexidade de Tempo

- **O(V + E)**, onde `V` é o número de vértices (nós) e `E` é o número de arestas.

### Complexidade de Espaço

- **O(V)**, onde `V` é o número de vértices (nós).

### Descrição

Este algoritmo calcula a profundidade máxima de uma árvore binária usando a abordagem de Busca em Largura (BFS).

### Função: `maxDepthBFS(root)`

#### Parâmetros:

- **`root`**: O nó raiz da árvore binária. Cada nó deve ter as seguintes propriedades:
  - `left` (Object|null): O nó filho à esquerda.
  - `right` (Object|null): O nó filho à direita.

#### Retorno:

- **`number`**: A profundidade máxima da árvore binária. Retorna `0` se a árvore estiver vazia.

### Como Funciona:

1. Se a raiz for `null`, a função retorna imediatamente `0`, pois a árvore está vazia.
2. Uma fila é inicializada com o nó raiz para facilitar a travessia em nível (BFS).
3. Uma variável `depth` é inicializada para rastrear a profundidade da árvore.
4. Enquanto a fila não estiver vazia:
   - O número de nós no nível atual (`levelSize`) é determinado.
   - Todos os nós no nível atual são processados:
     - O primeiro nó é removido da fila (`queue.shift()`).
     - Seus filhos esquerdo e direito são adicionados à fila, se existirem.
   - A variável `depth` é incrementada após processar todos os nós no nível atual.
5. A variável `depth` é retornada após a travessia de todos os níveis da árvore.

### Por Que BFS?

Esta abordagem utiliza BFS porque processa a árvore nível por nível, garantindo que todos os nós em uma determinada profundidade sejam visitados antes de passar para o próximo nível. Isso é ideal para calcular a profundidade máxima, pois rastreia automaticamente o nível de profundidade durante a travessia.
