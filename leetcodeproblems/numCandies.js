var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    const result = candies.map((candy) => candy + extraCandies >= maxCandies)

    return result
    
};