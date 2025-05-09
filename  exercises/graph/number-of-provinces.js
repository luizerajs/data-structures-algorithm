/**
 * @param {number[][]} isConnected
 * @return {number}

- isConnected: 
    [1,1,0]
    [1,1,0]
    [0,0,1]

1 <= número de cidades <= 200
numero de cidades == isConnected.length
numero de cidades == isConnected[i].length
isConnected[i][j] == 1 || isConnected[i][j] == 0

solução:
tempo: O(n^2)
espaço: O(n)

algoritmo:
cities = isConnection.length
visited = Array(citiies).fill(false)
provinces = 0

dfs

for (let city = 0; city < cities; city++) {
    if (!visited[city]) {
        dfs(city)
        province++
    }
}

return province


output: number (total number of provinces)


 */
function findNumberOfProvinces(isConnected) {
  const cities = isConnected.length
  const visited = Array(citiies).fill(false)
  let provinces = 0

  function dfs(city) {
      visited[city] = true

      for (let neighbor = 0; neighbor < isConnected[city].length; neighbor++) {
          if (isConnected[city][neighbor] == 1 && !visited[neighbor]) {
              dfs(neighbor)
          }
      }
  }

  for (let city = 0; city < cities; city++) {
      if (!visited[city]) {
          dfs(city)
          provinces++
      }
  }

  return provinces
};

const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
];

console.log(findNumberOfProvinces(isConnected)); // Saída: 2