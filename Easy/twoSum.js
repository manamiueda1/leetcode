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

function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
