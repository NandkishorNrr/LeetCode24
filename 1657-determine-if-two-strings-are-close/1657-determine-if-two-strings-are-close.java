class Solution {
    public boolean closeStrings(String word1, String word2) {
        if (word1.length() != word2.length())
            return false;

        int[] charCount1 = new int[26];
        int[] charCount2 = new int[26];
        int[] presentInWord1 = new int[26];
        int[] presentInWord2 = new int[26];

        for (char c : word1.toCharArray()) {
            charCount1[c - 'a']++;
            presentInWord1[c - 'a'] = 1;
        }

        for (char c : word2.toCharArray()) {
            charCount2[c - 'a']++;
            presentInWord2[c - 'a'] = 1;
        }

        for (int i = 0; i < 26; i++) {
            if ((charCount1[i] == 0 && charCount2[i] != 0) ||
                (charCount1[i] != 0 && charCount2[i] == 0) ||
                (presentInWord1[i] == 0 && presentInWord2[i] != 0) ||
                (presentInWord1[i] != 0 && presentInWord2[i] == 0)) {
                return false;
            }
        }

        return true;
    }
}
