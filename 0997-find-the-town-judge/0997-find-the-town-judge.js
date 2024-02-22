var findJudge = function(n, trust) {
    // Initialize arrays to count trust relationships
    const trusts = new Array(n + 1).fill(0); // Array to count how many people trust each person
    const trustedBy = new Array(n + 1).fill(0); // Array to count how many people each person trusts
    
    // Iterate through trust relationships
    for (const [a, b] of trust) {
        trusts[a]++; // Increment trust count for person a
        trustedBy[b]++; // Increment trustedBy count for person b
    }
    
    // Iterate through the counts to find the judge
    for (let i = 1; i <= n; i++) {
        if (trusts[i] === 0 && trustedBy[i] === n - 1) {
            return i; // Found the judge
        }
    }
    
    return -1; // Judge not found
};
