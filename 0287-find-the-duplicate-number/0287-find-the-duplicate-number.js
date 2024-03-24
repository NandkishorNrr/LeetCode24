var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];
    
    // Phase 1: Detecting the intersection point of the two pointers
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    // Phase 2: Finding the entrance of the cycle
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow; // or fast, both will point to the duplicate number
};
