class Solution {
    public int sumSubarrayMins(int[] arr) {
        final int MOD = 1000000007;
        int n = arr.length;

        int[] leftCount = new int[n];
        int[] rightCount = new int[n];

        Stack<Integer> stack = new Stack<>();

        // Calculate the number of subarrays where arr[i] is the minimum on the left
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
                stack.pop();
            }
            leftCount[i] = stack.isEmpty() ? i + 1 : i - stack.peek();
            stack.push(i);
        }

        stack.clear();

        // Calculate the number of subarrays where arr[i] is the minimum on the right
        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && arr[stack.peek()] > arr[i]) {
                stack.pop();
            }
            rightCount[i] = stack.isEmpty() ? n - i : stack.peek() - i;
            stack.push(i);
        }

        long result = 0;

        // Calculate the contribution of each element to the final result
        for (int i = 0; i < n; i++) {
            result = (result + (long) arr[i] * leftCount[i] * rightCount[i]) % MOD;
        }

        return (int) result;
    }
}
