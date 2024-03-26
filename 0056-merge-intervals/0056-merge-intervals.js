/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // Sort the intervals based on their start times
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        // If the current interval overlaps with the last merged interval
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Merge the intervals by updating the end time of the last merged interval
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // If there's no overlap, add the current interval to the merged list
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
};
