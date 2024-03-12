var flat = function(arr, n) {
    const result = [];
    
    // Helper function to flatten nested arrays recursively
    const flatten = (arr, depth) => {
        for (const element of arr) {
            if (Array.isArray(element) && depth > 0) {
                flatten(element, depth - 1);
            } else {
                result.push(element);
            }
        }
    };
    
    flatten(arr, n);
    return result;
};
