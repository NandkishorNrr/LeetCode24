class Solution {
    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        } else if (nums.length == 1) {
            return nums[0];
        }

        int prevMax = nums[0];
        int currentMax = Math.max(nums[0], nums[1]);

        for (int i = 2; i < nums.length; i++) {
            int temp = currentMax;
            currentMax = Math.max(currentMax, prevMax + nums[i]);
            prevMax = temp;
        }

        return currentMax;
    }
}
