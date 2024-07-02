/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/
var findKthLargest = function (nums, k) {
  let maxPriorityQueue = new MaxPriorityQueue();

  //we need to add all the elements to our mpq;
  nums.forEach((num) => maxPriorityQueue.enqueue(num));

  // keep removing the element from the top
  while (k > 1) {
    maxPriorityQueue.dequeue();
    k--;
  }

  // by default maxPriorityQueue.front() returns an objects {priority:5, element:5}
  // priority will give same result.
  return maxPriorityQueue.front().element;
};
