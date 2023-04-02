/**
 * Given an array of size n-1 and given that there are numbers from 1
 * to n with one missing, the missing number is to be found.
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
 */

function missingNumber(array, n) {
  let sum1 = 0;
  let sum2 = (n * (n + 1)) / 2;

  for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
  }
  return sum2 - sum1;
}

module.exports = missingNumber;
