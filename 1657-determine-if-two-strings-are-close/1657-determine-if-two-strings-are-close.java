class Solution {
    public boolean closeStrings(String word1, String word2) {
       if(word1.length() != word2.length())
            return false;
        int[] charCount1 = new int[26];
        int[] charCount2 = new int[26];

        for (int i = 0; i < word1.length(); i++) {
            charCount1[word1.charAt(i) - 'a']++;
            charCount2[word2.charAt(i) - 'a']++;
        }
        for (int i = 0; i < 26; i++) {
            if ((charCount1[i] == 0 && charCount2[i] != 0) || 
            (charCount1[i] != 0 && charCount2[i] == 0)) {
                return false;
            }
        }
        Arrays.sort(charCount1);
        Arrays.sort(charCount2);

        return Arrays.equals(charCount1, charCount2);
    }
}