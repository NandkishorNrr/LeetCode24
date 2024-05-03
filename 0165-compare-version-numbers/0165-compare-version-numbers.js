var compareVersion = function(version1, version2) {
    // Split the version strings into arrays of segments
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    
    // Get the maximum length of the two version arrays
    const maxLength = Math.max(v1.length, v2.length);
    
    // Iterate through each segment
    for (let i = 0; i < maxLength; i++) {
        // Convert segment strings to numbers, defaulting to 0 if undefined
        const num1 = parseInt(v1[i] || 0);
        const num2 = parseInt(v2[i] || 0);
        
        // Compare the segments numerically
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }
    
    // If all segments are equal, return 0
    return 0;
};
