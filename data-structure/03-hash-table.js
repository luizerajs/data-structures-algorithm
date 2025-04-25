function groupAnagrams(strs) {
  const stringKeys = strs.map((string) => string.split("").sort().join(""));
  const anagramMap = new Map();
  console.log(strs.length);

  for (let index = 0; index < strs.length; index++) {
    const currValue = anagramMap.get(stringKeys[index]);
    console.log(index);
    if (currValue?.length > 0) {
      anagramMap.set(stringKeys[index], [...currValue, strs[index]]);
    } else {
      anagramMap.set(stringKeys[index], [strs[index]]);
    }
  }

  return [...anagramMap.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
