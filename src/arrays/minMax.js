/**
 * Given an array arr[], find the minimum and maximum elements in the array.
 * @param {number[]} arr
 * @returns {number[]}
 */

function getMinMax(arr, n) {
  let minMax = [arr[0], arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minMax[0]) {
      minMax[0] = arr[i];
    }
    if (arr[i] > minMax[1]) {
      minMax[1] = arr[i];
    }
  }
  return minMax;
}

module.exports = getMinMax;
