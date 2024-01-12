public class Solution {

    public boolean halvesAreAlike(String s) {
        int n = s.length();
        int vowelCount = 0;

        for (int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            if (isVowel(ch)) {
                // Increment vowel count only for the first half of the string
                vowelCount += (i < n / 2) ? 1 : -1;
            }
        }

        // If vowelCount is 0, it means both halves have the same number of vowels
        return vowelCount == 0;
    }

    private boolean isVowel(char ch) {
        return "aeiouAEIOU".indexOf(ch) != -1;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.halvesAreAlike("book"));      // Output: true
        System.out.println(solution.halvesAreAlike("textbook"));  // Output: false
    }
}
