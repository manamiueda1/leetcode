// Two Sum

// Brut Force Solution

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; i < nums.length; j++) {
      if (i + j === target) {
        return [i, j];
      }
    }
  }
  return false;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// optimized solution
