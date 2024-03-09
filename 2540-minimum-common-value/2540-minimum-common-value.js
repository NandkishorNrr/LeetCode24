/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let result = -1;

    for (let num of nums1) {
        if (binarySearch(nums2, num)) {
            result = num;
            break;
        }
    }

    return result;
};

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

// Test cases
console.log(getCommon([1,2,3], [2,4])); // Output: 2
console.log(getCommon([1,2,3,6], [2,3,4,5])); // Output: 2
