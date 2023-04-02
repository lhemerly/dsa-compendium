/**
 * The task is to find a number in an array.
 * If the number is found, return the index of the number.
 * If the number is not found, return -1.
 * @param {number[]} arr
 * @param {number} X
 * @return {number}
 */

function whereNumber(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

module.exports = whereNumber;
