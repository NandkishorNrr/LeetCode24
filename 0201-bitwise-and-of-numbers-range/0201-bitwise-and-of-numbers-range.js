var rangeBitwiseAnd = function(left, right) {
    let shift = 0;
    // Find the common bits in the binary representation of left and right
    while (left < right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }
    // Left shift left by the common bits
    return left << shift;
};