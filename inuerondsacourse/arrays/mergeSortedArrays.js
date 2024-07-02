/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merged = function(nums1, m, nums2, n) {
    // initliaze array like nums1Copy
    let nums1Copy = nums1.slice(0, m);
        let p1 = 0;
        let p2 = 0;
        let p = 0;
 
        while (p < m + n) {
            if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
                nums1[p] = nums1Copy[p1];
                p1++;
            } else {
                nums1[p] = nums2[p2];
                p2++;
            }
            p++;
        }
};