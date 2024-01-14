import java.util.Arrays;

class Solution {
    public boolean closeStrings(String word1, String word2) {
        if (word1.length() != word2.length())
            return false;

        int[] charCount = new int[26];
        int[] charPresence1 = new int[26];
        int[] charPresence2 = new int[26];

        for (int i = 0; i < word1.length(); i++) {
            charCount[word1.charAt(i) - 'a']++;
            charPresence1[word1.charAt(i) - 'a'] = 1;
            charCount[word2.charAt(i) - 'a']--;
            charPresence2[word2.charAt(i) - 'a'] = 1;
        }

        for (int i = 0; i < 26; i++) {
            if ((charCount[i] != 0 && charPresence1[i] == 0) ||
                (charCount[i] != 0 && charPresence2[i] == 0)) {
                return false;
            }
        }

        return true;
    }
}
