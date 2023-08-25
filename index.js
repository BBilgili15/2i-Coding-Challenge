// 2i Coding Challenge in JavaScript

// Declare Variables
let target1 = 1
let list1 = [3, 4, 5, 6]
// Expected Output: 1

let target2 = 15
let list2 = [0, 15, 32, 2000, 15000]
// Expected Output: 1

let target3 = 42
let list3 = [1, 1, 10, 32, 41]
// Expected Output: 2


// Declare Function
function findPairsWithTotalOf(array, target) {
  let left = 0;
  let right = array.length - 1;
  let count = 0;

  while (left < right) {
    const total = array[left] + array[right];

    if (total === target) {
      count += 1;
      left += 1;
      right -= 1;
    } else if (total < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return count;
}

// Test Outcomes
console.log("#1: ", findPairsWithTotalOf(list1, target1))
console.log("#2: ", findPairsWithTotalOf(list2, target2))
console.log("#3: ", findPairsWithTotalOf(list3, target3))


// Notes & Summary

// I initially started with nested loops but it became overly complex to ensure that numbers weren't used again 
// if they had found a match. Nested loops also not ideal for large data sets.

// Moving through the array from both ends using variable indexes creates creater control of the task and 
// will work quickly on large sets of data.

// I have assumed, as mentioned within the task, that array is always in order. Therefore, when the total of the
// two numbers is lower than the target, the value of 'left' increases. This will ensure that the next total 
// increases. When the total of the numbers is greater than the target, the value of 'right' decreases. If there
// is a match, the count increases and both 'left' & 'right' increase as the number cannot be used again. 