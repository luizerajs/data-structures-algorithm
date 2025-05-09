class Stack {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("This list is empty!");
    }

    return this.list.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("This list is empty!");
    }

    return this.list[this.list.length - 1];
  }

  isEmpty() {
    return this.list.length === 0;
  }

  size() {
    return this.list.length;
  }

  clear() {
    this.list = [];
  }
}

/**
 * Problem Valid Parentheses:
 * @param {*} string 
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.

 * An input string is valid if:

 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * Solution:

 * valid input = "{}[]()" or "[{()}]"
 * invalid input = "[]{)" or "[)" or "["
 * output = boolean
 * stack (LIFO) to save all OPEN brackets
 * a map to define the rule between {} [] and ()
 * 
 */



function solution(string) {
  const bracketsMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const openBracketsStack = new Stack();

  for (let bracket of string) {
    if (bracketsMap[bracket]) {
      openBracketsStack.push(bracket);
    } else {
      const lastBracket = openBracketsStack.pop();

      if (bracketsMap[lastBracket] !== bracket) {
        return false;
      }
    }
  }

  return openBracketsStack.isEmpty();
}

console.log(`expect: true, receive: ${solution("{}[]()")}`);
console.log(`expect: true, receive: ${solution("[{()}]")}`);
console.log(`expect: false, receive: ${solution("[]{)")}`);
console.log(`expect: false, receive: ${solution("[)")}`);
console.log(`expect: false, receive: ${solution("[")}`);
