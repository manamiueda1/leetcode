// Two Sum

// Brut Force Solution

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

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// optimized solution

// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     let currentSum = array[left] + array[right];
//     if (currentSum === targetSum) {
//       return [array[left], array[right]];
//     } else if (currentSum < targetSum) {
//       left++;
//     } else if (currentSum > targetSum) {
//       right--;
//     }
//   }
//   return [];
// }
