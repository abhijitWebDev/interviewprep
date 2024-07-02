function gridPathCounting(grid, row=0, col=0) {
    let memo = {};

    const pos = row + ',' + col;

    if(
    row >= grid.length
        || 
    col >= row[0].length
    ||
    grid[row][col] === 'X' // x or wall or snake or crocodile
) {
    return 0;
}

// check if you have arrived at given location
if(row === grid.length-1 && col === grid[0].length - 1) {
    return 1;
}

// return cache result
if(pos in memo) {
    return memo[pos]
}
memo[pos] = gridPathCounting(grid, row + 1, col , memo) + gridPathCounting(grid,row, col + 1, memo)

return memo[pos];


}