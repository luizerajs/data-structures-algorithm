/**
 * @param {number[]} nums
 * @return {boolean}

    problem: find if the array has a duplicate number

    constraints: 
    - input: nums > 0 e nums < 10ˆ5 (100.000.000)
    - input: -10^9 <= nums[i] <= 10ˆ9 

    output:
    - true if any value appears at least twice
    - false if every element is distinct

    examples: 
    - [1,2,3,4] expect(false)
    - [1,3,4,1] expect(true)

    Questions:
    - O input é mutável? X
    - Os dados estão ordenados? V
    - O input pode estar vazio? V 

    Solução:
    - Hash Table (Map) pra armazenar os valores visitados.
    - Se em algum momento for encontrado o elemento no HashMap de visitados
    - Então eu retorno true. Caso contrário false
 */
var containsDuplicate = function (nums) {
  const visited = new Set();

  for (let num of nums) {
    if (visited.has(num)) {
      return true;
    }

    visited.add(num);
  }

  return false;
};

// Example 
console.log(containsDuplicate([1,2,3,4])) // expect false
console.log(containsDuplicate([1,3,4,1])) // expect true