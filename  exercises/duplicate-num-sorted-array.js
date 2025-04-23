function removeDuplicates(nums) {
  let uniquePointer = 0;
  const newArray = [nums[0]];

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== nums[uniquePointer]) {
      uniquePointer++;
      nums[uniquePointer] = nums[index];
      newArray.push(nums[index]);
    }
  }

  console.log(newArray);
  console.log(nums);
  return uniquePointer + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // expect: 5
