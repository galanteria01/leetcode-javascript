/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let mp = new Map();
    for (const n of nums) {
        if (!mp.has(n)) {
            mp.set(n, 0)
        }
        mp.set(n, mp.get(n) + 1)
    }
    let maxValue = -1;
    let maxKey = -1;
    for (const [key, value] of mp.entries()) {
        if (value > maxValue) { maxValue = value; maxKey = key; }
    }
    return maxKey
};