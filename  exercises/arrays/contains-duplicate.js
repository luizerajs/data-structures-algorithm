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

console.log(containsDuplicate([1, 2, 3, 4])); // expect: false
console.log(containsDuplicate([1, 2, 3, 1])); // expect: true
