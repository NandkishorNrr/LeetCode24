class Solution {
    public String sortSentence(String s) {
         String[] sArr = new String[s.split(" ").length];
        StringBuilder w = new StringBuilder();

        for(char c: s.toCharArray()){
            if (c == ' ')
                continue;
            else if (c < 'A'){
                sArr[ c - '1'] = w.toString();
                w.setLength(0);
            }

            else {
                w.append(c);
            }
        }
        for (String e: sArr){
            w.append(e + " ");
        }
        return w.toString().trim();
    }
}