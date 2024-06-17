// coin possible

function minCoinPossible(coins, amount) {
    let memo={};

    if(amount in memo) return memo[amount];

    if(amount == 0) return true;
    if(amount<0) return false;

    let minCoinsCount = Infinity;

    for (const coin of coins) {
        const result = minCoinPossible(coins, amount - coin, memo)
        if(result !== -1) {
            minCoinsCount = Math.min(minCoinsCount , result + 1)
        };
        
    };

    // for(const coin of coins) {
    //     let recentCount = 1 + minCoinPossible(coins, amount - coin, memo);
    //     minCoinCount = Math.min(recentCount, minCoinsCount);
    // }
    memo[amount] = minCoinsCount === Infinity ? -1 : minCoinsCount;

    return memo[amount];
}