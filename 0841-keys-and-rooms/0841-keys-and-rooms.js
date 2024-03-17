/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set(); // Set to keep track of visited rooms
    visited.add(0); // Mark the first room as visited
    dfs(0); // Start DFS from the first room
    
    // Check if all rooms have been visited
    return visited.size === rooms.length;

    // DFS function to visit all reachable rooms
    function dfs(roomIndex) {
        for (const key of rooms[roomIndex]) {
            if (!visited.has(key)) {
                visited.add(key);
                dfs(key);
            }
        }
    }
};
