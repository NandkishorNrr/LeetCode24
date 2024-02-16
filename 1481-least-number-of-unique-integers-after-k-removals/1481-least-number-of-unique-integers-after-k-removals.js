var findLeastNumOfUniqueInts = function(arr, k) {
    // Step 1: Create a frequency map
    const frequencyMap = new Map();
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Step 2: Convert the map values to an array and sort it
    const frequencies = Array.from(frequencyMap.values()).sort((a, b) => a - b);
    
    // Step 3: Remove the least frequent integers until k elements are removed
    let uniqueIntegers = frequencies.length;
    let index = 0;
    while (k > 0 && index < frequencies.length) {
        const freq = frequencies[index];
        if (k >= freq) {
            k -= freq;
            uniqueIntegers--;
        } else {
            break;
        }
        index++;
    }
    
    return uniqueIntegers;
};
