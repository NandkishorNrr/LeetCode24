/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastIndex = new Array(26).fill(-1); // Array to store the last index of each character
    
    // Record the last index of each character in the string
    for (let i = 0; i < s.length; i++) {
        lastIndex[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }
    
    const partitions = [];
    let start = 0;
    let end = 0;
    
    // Iterate through the string to find partition points
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
        
        // If the current index is equal to the end index, it's a partition point
        if (i === end) {
            partitions.push(end - start + 1);
            start = end + 1;
        }
    }
    
    return partitions;
};
