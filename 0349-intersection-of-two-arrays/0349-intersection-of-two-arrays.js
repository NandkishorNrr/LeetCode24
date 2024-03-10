function intersection(nums1, nums2) {
    // Convert arrays to sets to remove duplicates
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    // Initialize an empty array to store the intersection
    const intersect = [];
    
    // Iterate through set1 and check if each element is in set2
    for (const num of set1) {
        if (set2.has(num)) {
            // If the element exists in both sets, add it to the intersection array
            intersect.push(num);
        }
    }
    
    return intersect;
}

// Example usage:
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2));  // Output: [2]

const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
console.log(intersection(nums3, nums4));  // Output: [9, 4]
