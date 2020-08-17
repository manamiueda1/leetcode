// Two Sum

// Brut Force Solution

// Time: O(n^2) Space: O(1)

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i, j);
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
        return;
      }
    }
  }
  console.log(false);
  return;
};

twoSum([1, 2, 4, 5, 9], 10);
twoSum([1, 2, 3], 100);

// optimized solution
// Time: O(n) Space: O(1)

function twoNumberSum(array, targetSum) {
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

// Solution using Hash Map
// time: 0(n) space: 0(n)

function twoNumberSum(array, targetSum) {
  let track = new Map();
  for (let i = 0; i < array.length; i++) {
    let remainder = targetSum - array[i];

    if (track[remainder]) {
      return [array[i], remainder];
    } else {
      track[array[i]] = true;
    }
  }
  return [];
}
