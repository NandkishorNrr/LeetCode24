class Solution {
    public int[] findErrorNums(int[] nums) {
        int n = nums.length;
        int[] result = new int[2];

        for (int num : nums) {
            int index = Math.abs(num) - 1;
            if (nums[index] < 0) {
                result[0] = Math.abs(num);
            } else {
                nums[index] = -nums[index];
            }
        }

        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                result[1] = i + 1;
                break;
            }
        }

        return result;
    }
}
