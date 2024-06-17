function nonAdjecentValues(nums, i=0) {
    let memo = {};
    if(i in memo) return memo[i]

    // out of bounds check
    if(i >= nums.length) return 0;

    const skip = nonAdjecentValues(nums, i+1, memo);
    const take = nums[i] + nonAdjecentValues(nums, i+2, memo);

    memo[i] = Math.max(skip, take);
    return memo[i]
}