function countSubstrings(s) {
    let count = 0;
    const n = s.length;
    
    // Create a 2D array to store whether substrings are palindromes
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    
    // Single characters are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        count++;
    }
    
    // Check for palindromes of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            count++;
        }
    }
    
    // Check for palindromes of length greater than 2
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                count++;
            }
        }
    }
    
    return count;
}