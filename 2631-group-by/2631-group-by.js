/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};

    // Iterate over each element of the array
    this.forEach(element => {
        // Get the key for grouping using the provided function
        const key = fn(element);

        // Add the element to the corresponding group
        if (!result[key]) {
            result[key] = [element];
        } else {
            result[key].push(element);
        }
    });

    return result;
};
