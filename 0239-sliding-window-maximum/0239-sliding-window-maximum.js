var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = [];

    // Helper function to clean deque from elements that are out of the current window
    const cleanDeque = (i) => {
        // Remove indices that are out of the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        // Remove smaller elements from the back of the deque
        while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop();
        }
    };

    for (let i = 0; i < nums.length; i++) {
        cleanDeque(i);

        // Add current index to the deque
        deque.push(i);

        // Add maximum element in current window to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
