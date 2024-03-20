/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Build adjacency list representing the graph
    const graph = new Map();
    for (let [course, prereq] of prerequisites) {
        if (!graph.has(course)) {
            graph.set(course, []);
        }
        graph.get(course).push(prereq);
    }
    
    // Initialize visited array to keep track of visited nodes during DFS
    const visited = new Array(numCourses).fill(0);
    
    // Perform DFS to detect cycles
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i, graph, visited)) {
            return false; // Cycle detected, cannot finish courses
        }
    }
    
    return true; // No cycles detected, can finish courses

    function dfs(course, graph, visited) {
        if (visited[course] === 1) return false; // Cycle detected
        if (visited[course] === 2) return true; // Already visited
        
        // Mark the current course as being visited
        visited[course] = 1;
        
        // Explore the neighbors of the current course
        if (graph.has(course)) {
            for (let neighbor of graph.get(course)) {
                if (!dfs(neighbor, graph, visited)) {
                    return false; // Cycle detected
                }
            }
        }
        
        // Mark the current course as visited
        visited[course] = 2;
        
        return true;
    }
};
