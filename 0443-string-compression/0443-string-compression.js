/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0; // Pointer to the current position in the output array
    let i = 0; // Pointer to iterate through the input array

    while (i < chars.length) {
        let j = i;
        while (j < chars.length && chars[j] === chars[i]) {
            j++;
        }
        
        chars[index++] = chars[i]; // Write the character
        if (j - i > 1) {
            const count = String(j - i); // Convert count to string
            for (let c of count) {
                chars[index++] = c; // Write the count characters
            }
        }
        
        i = j; // Move i to the next character
    }

    return index; // Return the length of the compressed array
};
