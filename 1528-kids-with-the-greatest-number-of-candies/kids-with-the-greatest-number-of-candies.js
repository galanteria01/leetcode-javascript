/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let n = candies.length;
    let res = [];
    let max = - 1;
    for (const c of candies) {
        res.push(false)
        max = Math.max(max, c)
    }

    for (const i in candies) {
        if (candies[i] + extraCandies >= max) {
            res[i] = true
        }
    }

    return res;
};