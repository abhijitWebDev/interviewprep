const grid = [[3,2,1],[1,7,6],[2,7,7]];

// let cols = []; // columns array;

// for (let j = 0; j < grid.length; j++) {
//     for (let i = 0; i < grid.length; i++) {
//         cols.push(grid[i][j]);
//         console.log(cols);
        
        
//     }
    
// }


// problem solution
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;

    const rowMap = new Map();

    for (let i = 0; i < n; i++) {
       const rowStr=  grid[i].join(',');
       rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
        
    }

    let count = 0;

    for (let j = 0; j < n; j++) {
        let colsArr = [];
        for (let i = 0; i < n; i++) {
            colsArr.push(grid[i][j])
            
        }
       const colStr =  colsArr.join(',')
       if(rowMap.has(colStr)) {
        count += rowMap.get(colStr);
       }
    
}
return count;
};
