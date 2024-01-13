public class Solution {
    public int minSteps(String s, String t) {
        if (s.length() != t.length()) {
            throw new IllegalArgumentException("Input strings must have the same length");
        }

        int[] charCount = new int[26];

        // Count the frequency of characters in the first string
        for (char ch : s.toCharArray()) {
            charCount[ch - 'a']++;
        }

        // Decrement the count for each character in the second string
        for (char ch : t.toCharArray()) {
            charCount[ch - 'a']--;
        }

        // Calculate the total steps needed
        int totalSteps = 0;
        for (int count : charCount) {
            totalSteps += Math.abs(count);
        }

        // Divide by 2 as we are counting the differences twice (in both strings)
        return totalSteps / 2;
    }
}
