var deckRevealedIncreasing = function(deck) {
    // Step 1: Sort the deck in increasing order
    deck.sort((a, b) => a - b);
    
    const result = [];
    
    // Step 2: Initialize an empty array to store the result
    // Step 3 & 4: Iterating through the sorted deck array and manipulating result array
    for (let i = deck.length - 1; i >= 0; i--) {
        if (result.length) {
            result.unshift(result.pop());
        }
        result.unshift(deck[i]);
    }
    
    // Step 5: Return the result array
    return result;
};
