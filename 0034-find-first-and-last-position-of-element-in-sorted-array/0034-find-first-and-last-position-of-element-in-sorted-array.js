var searchRange = function(nums, target) {
    const findLeftmost = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };

    const findRightmost = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right + 1) / 2);
            if (nums[mid] <= target) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }

        return right;
    };

    const leftIndex = findLeftmost(nums, target);
    const rightIndex = findRightmost(nums, target);

    if (nums[leftIndex] !== target) {
        return [-1, -1];
    }

    return [leftIndex, rightIndex];
};
