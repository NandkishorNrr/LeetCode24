/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1; // Minimum possible eating speed
    let right = Math.max(...piles); // Maximum possible eating speed

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canEatAll(piles, h, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

// Helper function to check if it's possible to eat all bananas within h hours with a given eating speed
function canEatAll(piles, h, speed) {
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
        hours += Math.ceil(piles[i] / speed);
    }
    return hours <= h;
}
