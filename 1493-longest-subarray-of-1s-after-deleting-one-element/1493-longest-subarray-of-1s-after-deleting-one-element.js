/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
    if(!nums.includes(1)) return 0
    const zeroindexes = nums.reduce((acc, item, index) => {
        if(!item) acc.push(index + 1)
        return acc
    }, [0])
    zeroindexes.push(nums.length + 1)

    if(zeroindexes.length === 2) return nums.length - 1
    const result = zeroindexes.reduce((acc, item, index) => {
        if (zeroindexes[index + 1] && ((zeroindexes[index + 1] - item) > acc)) acc =  zeroindexes[index + 1] - item - 1
        if (zeroindexes[index + 2] && ((zeroindexes[index + 2] - item - 2) > acc)) acc =  zeroindexes[index + 2] - item - 2
        return acc
    }, 0)

    return result
};