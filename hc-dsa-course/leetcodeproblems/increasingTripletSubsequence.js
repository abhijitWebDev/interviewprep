/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstSmallest= Infinity;
    let secondSmallest=Infinity;
    // let thirdSmallest=Infinity;

    for (const num of nums) {
        if(num <= firstSmallest) {
            firstSmallest = num;
        } else if(num <= secondSmallest) {
            secondSmallest = num;
        } else {
            return true;
        }
        
    }
    return false;
    
};

//Input: nums = [2,1,5,0,4,6]