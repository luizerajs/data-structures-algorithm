# Função `removeDuplicates`

# `removeDuplicates`

A função `removeDuplicates` remove duplicados de um array ordenado "in-place" (no próprio array) e retorna o número de elementos únicos. Após a execução, os primeiros elementos do array contêm os valores únicos, enquanto os valores duplicados são sobrescritos.

---

## **Como Funciona**

### **Entrada**

- Um array ordenado `nums` (exemplo: `[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]`).

### **Saída**

- O número de elementos únicos no array.
- O array `nums` modificado, com os valores únicos nas primeiras posições.

### **Estratégia**

Utiliza o **algoritmo de dois ponteiros**:

- Um ponteiro (`uniquePointer`) rastreia a posição do último elemento único encontrado.
- Um loop percorre o array com outro ponteiro (`index`), comparando o elemento atual com o último elemento único.
- Sempre que um novo valor único é encontrado, ele é movido para a próxima posição no array, sobrescrevendo os valores duplicados.

---

## **Passo a Passo**

1. Inicialize `uniquePointer` como `0`, apontando para o primeiro elemento do array.
2. Percorra o array a partir do segundo elemento (`index = 1`):

- Compare o elemento atual (`nums[index]`) com o último elemento único (`nums[uniquePointer]`).
- Se forem diferentes:
  - Incremente `uniquePointer`.
  - Copie o valor atual para a posição `uniquePointer` no array.

3. Continue até o final do array.
4. Retorne `uniquePointer + 1`, que representa o número de elementos únicos.

---

## **Exemplo de Execução**

### **Entrada**

```plaintext
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
```

### **Iterações**

#### Inicial

```plaintext
uniquePointer = 0
```

#### Iteração 1 (`index = 1`)

```plaintext
nums[1] === nums[0] → Duplicado, ignore.
```

#### Iteração 2 (`index = 2`)

```plaintext
nums[2] !== nums[0] → Novo valor único.
Incrementa uniquePointer para 1.
Atualiza nums[1] = 1.
```

#### Iteração 5 (`index = 5`)

```plaintext
nums[5] !== nums[1] → Novo valor único.
Incrementa uniquePointer para 2.
Atualiza nums[2] = 2.
```

Continue até o final.

### **Resultado Final**

```plaintext
nums = [0, 1, 2, 3, 4, 2, 2, 3, 3, 4] (os valores únicos estão nas primeiras posições).
Retorna 5 (número de elementos únicos).
```

---

## **Complexidade**

### **Tempo**

O algoritmo percorre o array uma única vez, então a complexidade é **O(n)**, onde `n` é o tamanho do array.

### **Espaço**

O algoritmo é **O(1)** em termos de espaço adicional, pois modifica o array diretamente.

---

## **Saída Esperada**

### **Entrada**

```plaintext
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
```

### **Saída**

```plaintext
5
```

---

## **Notas**

- O array `nums` é modificado diretamente.
- Os valores únicos são colocados nas primeiras posições do array.
- Os valores duplicados após os valores únicos podem ser ignorados.
