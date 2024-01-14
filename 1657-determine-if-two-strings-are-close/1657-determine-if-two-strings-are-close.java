import java.util.Arrays;

class Solution {
    public boolean closeStrings(String word1, String word2) {
        if (word1.length() != word2.length())
            return false;

        int[] charCount1 = new int[26];
        int[] charCount2 = new int[26];
        boolean[] charPresent1 = new boolean[26];
        boolean[] charPresent2 = new boolean[26];

        for (int i = 0; i < word1.length(); i++) {
            charCount1[word1.charAt(i) - 'a']++;
            charPresent1[word1.charAt(i) - 'a'] = true;
            charCount2[word2.charAt(i) - 'a']++;
            charPresent2[word2.charAt(i) - 'a'] = true;
        }

        Arrays.sort(charCount1);
        Arrays.sort(charCount2);

        return Arrays.equals(charCount1, charCount2) && Arrays.equals(charPresent1, charPresent2);
    }
}
