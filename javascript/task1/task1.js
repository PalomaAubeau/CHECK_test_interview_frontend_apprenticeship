// Task 1: Array Manipulation
// Using the filter method to get only even numbers (those that can be divided by 2) - is more appropriate than "for-in"
function getEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}
