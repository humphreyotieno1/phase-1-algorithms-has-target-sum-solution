function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Time complexity: O(n)
  Space complexity: O(n)
*/

/* 
  - iterate over the array of numbers
  - for the current number, identify a complementary number that adds to our target
  - (for example: if our number is 2, and the target is 5, the complementary number is 3)
  - iterate over the remaining numbers in the array
    - check if any of the remaining numbers is the complement
      - if so, return true
- if we reach the end of the array, return false
*/

/*
  
I need to create a function called hasTargetSum that examines whether 
there are two numbers in an array whose sum equals a specified target number. 
For instance, if the array is [1, 2, 3, 4] and the target is 6, the function 
should return true because 2 and 4 add up to 6. Conversely, if the target is 10, 
indicating that no pair of numbers in the array sums to 10, the function should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
