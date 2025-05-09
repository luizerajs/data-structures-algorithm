/**
 * @param {string} s
 * @return {boolean}

    problem: discovery if the setence is palindrome

    inputs e test case: 
    - "A man, a plan, a canal: Panama" expect(true)
      Explanation: "amanaplanacanalpanama" is a palindrome.
    - "race a car" expect(false)
      Explanation: "raceacar" is not a palindrome.
    
    output:
    - boolean


    Questions:
    - O input é mutável? X
    - Os dados estão ordenados? X
    - O input pode estar vazio? V 
    - Quais os limites de tamanho dos inputs? V 

    constraints: 
    - input: 1 <= s.length <= 2 * 10ˆ5 (100.000.000)
    - input: s consists only of printable ASCII characters.

    Edge Case:
    - Returnar true if the string is empty after removing non-alphanumeric characters



    Solução:
    - Sanitizar a string para manter apenas alfanuméricos replace()
    - Se string for vazia, retornar true
    - Two Pointers pegando o primeiro e último elemento
    - Validar se são iguais
        - While (firstEl, lastEl)
        - se sim, continue o loop e move ponteiros
        - se não, return false
 */
var isPalindrome = function (s) {
  const sanitizedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (!sanitizedString) {
    return true;
  }

  let rightCharIndex = 0;
  let leftCharIndex = sanitizedString.length - 1;

  while (rightCharIndex < leftCharIndex) {
    if (sanitizedString[rightCharIndex] === sanitizedString[leftCharIndex]) {
      rightCharIndex++;
      leftCharIndex--;
    } else {
      return false;
    }
  }

  return true;
};

// Example isPalindrome
console.log(`expect true for "A man, a plan, a canal: Panama": (${isPalindrome('A man, a plan, a canal: Panama')})`)
console.log(`expect false for "race a car": (${isPalindrome('race a car')})`)
