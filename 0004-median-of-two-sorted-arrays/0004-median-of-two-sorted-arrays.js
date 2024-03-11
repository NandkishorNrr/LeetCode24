var findMedianSortedArrays = function(nums1, nums2) {
    // Merge the two sorted arrays
    const mergedArray = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }
    while (i < nums1.length) {
        mergedArray.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        mergedArray.push(nums2[j]);
        j++;
    }
    
    // Find the median of the merged array
    const totalLength = mergedArray.length;
    if (totalLength % 2 === 1) {
        return mergedArray[Math.floor(totalLength / 2)];
    } else {
        const midIndex1 = totalLength / 2 - 1;
        const midIndex2 = totalLength / 2;
        return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
    }
};
