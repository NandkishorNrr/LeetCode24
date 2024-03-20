/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    backtrack(1, [], k, n, result);
    return result;
};

function backtrack(start, path, k, target, result) {
    if (target === 0 && path.length === k) {
        result.push([...path]);
        return;
    }

    for (let i = start; i <= 9; i++) {
        if (target - i < 0) break;
        if (path.length >= k) break; // Optimization: If the path length exceeds k, stop further exploration
        path.push(i);
        backtrack(i + 1, path, k, target - i, result);
        path.pop();
    }
}
