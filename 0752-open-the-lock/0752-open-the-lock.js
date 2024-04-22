/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    // Convert deadends to set for O(1) lookup
    const deadSet = new Set(deadends);
    
    // If '0000' is in deadends, it is impossible to open the lock
    if (deadSet.has('0000')) return -1;
    
    // Initialize the queue with the starting position '0000'
    const queue = ['0000'];
    
    // Mark '0000' as visited
    const visited = new Set(['0000']);
    
    // Start BFS
    let level = 0;
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const current = queue.shift();
            
            // If the current position is the target, return the level
            if (current === target) return level;
            
            // Generate all possible combinations by rotating the wheels
            for (let j = 0; j < 4; j++) {
                for (let k = -1; k <= 1; k += 2) {
                    const next = rotate(current, j, k);
                    if (!deadSet.has(next) && !visited.has(next)) {
                        visited.add(next);
                        queue.push(next);
                    }
                }
            }
        }
        level++;
    }
    
    // If we reach here, it means it's impossible to open the lock
    return -1;
};

// Function to rotate the lock's wheels
function rotate(str, wheel, direction) {
    const arr = str.split('');
    const digit = parseInt(arr[wheel]);
    arr[wheel] = (digit + direction + 10) % 10;
    return arr.join('');
}
