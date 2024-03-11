var gcdOfStrings = function(str1, str2) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    const gcdLength = gcd(str1.length, str2.length);
    const gcdStr = str1.slice(0, gcdLength);

    if (str1 + str2 === str2 + str1) {
        return gcdStr;
    } else {
        return '';
    }
};
