/**
 * @param {number[]} nums
 * @return {number}
 
Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */
var maxProduct = function(nums) {
    let currMax = nums[0];
    let currMin = nums[0];
    let res = num[0];

    for (let i = 0; i < nums.length; i++) {
        const tempMax = currMax;

        currMax = Math.max(nums[i],  nums[i]*currMax , nums[i] * currMin);
        currMin = Math.min(nums[i], nums[i]*currMax , nums[i] * tempMax);
        res = Math.max(res, currMax)
        
    }

    return res;
    
};