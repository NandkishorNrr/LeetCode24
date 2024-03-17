/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = []; // Stack to keep track of directories
    
    // Split the path by "/"
    const dirs = path.split('/');
    
    // Iterate through the directories
    for (const dir of dirs) {
        if (dir === '' || dir === '.') {
            // Ignore empty strings or current directory "."
            continue;
        } else if (dir === '..') {
            // If encountered "..", pop the last directory from the stack (if exists)
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // Otherwise, push the directory onto the stack
            stack.push(dir);
        }
    }
    
    // Construct the simplified path
    const simplifiedPath = '/' + stack.join('/');
    
    return simplifiedPath;
};
