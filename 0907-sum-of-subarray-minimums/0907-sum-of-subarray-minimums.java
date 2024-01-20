import java.util.Stack;

class Solution {
    public int sumSubarrayMins(int[] arr) {
        final int MOD = 1000000007;
        int n = arr.length;
        Stack<Integer> stack = new Stack<>();
        long result = 0;

        for (int i = 0; i <= n; i++) {
            while (!stack.isEmpty() && (i == n || arr[stack.peek()] > arr[i])) {
                int poppedIndex = stack.pop();
                int left = poppedIndex - (stack.isEmpty() ? -1 : stack.peek());
                int right = i - poppedIndex;
                result = (result + (long) arr[poppedIndex] * left * right) % MOD;
            }
            stack.push(i);
        }

        return (int) result;
    }
}
