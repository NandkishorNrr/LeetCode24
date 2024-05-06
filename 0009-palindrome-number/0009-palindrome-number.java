class Solution {
    public boolean isPalindrome(int x) {
        int temp = x;
        int revX = 0;
        while(temp > 0){
            revX = revX*10 + temp%10;
            temp = temp / 10;
        }
        
         return x == revX;
    }
}