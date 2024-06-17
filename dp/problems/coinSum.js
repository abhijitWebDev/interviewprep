// coin possible

function coinPossible(amount, nums) {
    let memo={};

    if(amount in memo) return memo[amount];

    if(amount == 0) return true;
    if(amount<0) return false;

    for (const num of nums) {
        if(sumPossible(amount - num, nums, memo)) {
            memo[amount] = true;
            return true;
        };
        
    };
    memo[amount] = false;
    return false;
}