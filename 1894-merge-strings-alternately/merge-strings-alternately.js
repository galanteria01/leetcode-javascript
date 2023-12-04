/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let i = 0;
    let m = word1.length, n = word2.length;
    let ans = ""

    while (i < Math.max(m, n)) {
        ans += word1[i] || ""
        ans += word2[i] || ""
        i++;
    }

    return ans
};