class Solution {
    public int minOperations(int[] nums) {
        int nOperation = 0;
    Arrays.sort(nums);

    int i = 0;
    while (i < nums.length) {
        int noTime = 1;

        while (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            i++;
            noTime++;
        }

        if (noTime == 1) {
            return -1;
        }

        nOperation += noTime / 3;

        if (noTime % 3 != 0) {
            nOperation++;
        }

        i++;
    }

    return nOperation;
    }
}