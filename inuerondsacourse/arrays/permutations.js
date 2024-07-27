/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const backtrack = (path, options) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < options.length; i++) {
            path.push(options[i]);
            backtrack(path, options.slice(0, i).concat(options.slice(i + 1)));
            path.pop();
        }
    };
    backtrack([], nums);
    return result;
    
};