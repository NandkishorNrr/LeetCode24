class Solution {
    public int[] findErrorNums(int[] nums) {
        int n = nums.length;
        
        int[] result = new int[2];
        
        for (int i = 0; i < n; i++) {
            int index = Math.abs(nums[i]) - 1;
            
            // If the value at the calculated index is negative, it means we've
            // seen this index before, indicating the duplicate number.
            if (nums[index] < 0) {
                result[0] = Math.abs(nums[i]);
            } else {
                // Mark the value at the calculated index as negative to indicate
                // that we have seen this index.
                nums[index] = -nums[index];
            }
        }
        
        // Iterate through the array to find the missing number.
        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                result[1] = i + 1;
                break;
            }
        }
        
        return result;
    }
}
