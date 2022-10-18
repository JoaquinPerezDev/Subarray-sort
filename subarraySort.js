// Write a function that takes in an array of at least two integers and returns an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted(in ascending order). If the input array is already sorted, the function should return [-1, -1].

// Sample input: array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
// Sampe output: [3, 9]

//Naive approach: We can sort the array and check each value to it's neighbors and see
//  if it's in fact in the correct place. If it is either the first value of the array or
//  less than the value of the number to its right, then we label as "true" and continue.
//  If it's bigger than the value of the number to its right, then we label as "false" and
//  continue. Once this loop is done, we can check the unsorted values for the highest and
//  lowest values. We can then determine where in the array these values would go if they
//  were sorted. In the case of our input array, these numbers would be "6" and "12",
//  lowest and highest numbers respectively. The indices of these numbers if they were in
//  their sorted position are "3" and "9", just like our sample output. This is the
//  general approach to the logic of subarray sort.

//O(n) time || O(1) space complexity

//time complexity: The runtime for this is dependent on the loops required to traverse through the array to perform the various sequences. These loops run in linear time or O(n).

//space complexity: For the space, it results in O(1) constant space, given that we are not taking up any extra space. We are exclusively traversing through the input array we are given.

function subarraySort(array) {
  // Write your code here.
  let minOut = Infinity;
  let maxOut = -Infinity;

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (isOutofOrder(i, num, array)) {
      minOut = Math.min(minOut, num);
      maxOut = Math.max(maxOut, num);
    }
  }
  if (minOut == Infinity) {
    return [-1, -1];
  }
  subArrLeftIdx = 0;
  while (minOut >= array[subArrLeftIdx]) {
    subArrLeftIdx += 1;
  }

  subArrRightIdx = array.length - 1;
  while (maxOut <= array[subArrRightIdx]) {
    subArrRightIdx -= 1;
  }

  return [subArrLeftIdx, subArrRightIdx];
}

function isOutofOrder(i, num, array) {
  if (i == 0) {
    return num > array[i + 1];
  }
  if (i == array.length - 1) {
    return num < array[i - 1];
  }
  return num > array[i + 1] || num < array[i - 1];
}
