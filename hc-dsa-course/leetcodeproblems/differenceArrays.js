// find difference of two arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

/*
Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

*/

var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const uniqueOne = [...set1].filter((x) => !set2.has(x));
  const uniqueTwo = [...set2].filter((x) => !set1.has(x));

  return [uniqueOne, uniqueTwo];
};
