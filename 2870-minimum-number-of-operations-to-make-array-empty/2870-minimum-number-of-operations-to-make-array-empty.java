class Solution {
    public int minOperations(int[] nums) {
        // Step 1: Sort the array in ascending order
        Arrays.sort(nums);

        // Step 2: Initialize the result and start index
        int result = 0;
        int startIndex = 0;

        // Step 3: Iterate through the sorted array
        while (startIndex < nums.length) {
            // Step 4: Find the end index of the current group of equal elements
            int endIndex = startIndex;

            while (endIndex < nums.length && nums[endIndex] == nums[startIndex]) {
                endIndex++;
            }

            // Step 5: Calculate the count of the current element
            int count = endIndex - startIndex;

            // Step 6: If there is no repetition, return -1
            if (count == 1) {
                return -1;
            }

            // Step 7: Update the result based on the count
            result += count / 3;

            // Step 8: If there's a remainder, increment the result
            if (count % 3 != 0) {
                result++;
            }

            // Step 9: Move the start index to the next group of elements
            startIndex = endIndex;
        }

        // Step 10: Return the final result
        return result;  
    }
}