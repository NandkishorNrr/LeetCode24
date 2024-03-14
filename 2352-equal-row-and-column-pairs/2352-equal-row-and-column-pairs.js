/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
        if(grid[0].length!==grid.length) return 0;
    
    let rows = {};
    let cols = {};
    let count=0;

    grid.forEach((val,idx)=>rows[idx]=val.toString())
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(cols[j]){
                cols[j] += "," + grid[i][j].toString(); // Append value to the corresponding column string
            }
            else {
                cols[j] = grid[i][j].toString();
            }
            
        }
    }

    for (let keyr in rows) {
        for (let keyc in cols) {
            if(cols[keyc]===rows[keyr]){
                count++;
            }
        }
    }
    
    
    return count;
};