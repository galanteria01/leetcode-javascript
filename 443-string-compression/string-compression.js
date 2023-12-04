/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let n = chars.length;

    let ch = null;
    let s = ""
    let i = 0;
    while (i < n) {
        let rep = 0;
        ch = chars[i];
        while (ch === chars[i]) {
            rep++; i++;
        }
        s += `${ch}${rep > 1 ? rep : ""}`

    }
    i = 0;
    let m = s.length;
    while (i < m) {
        chars[i] = s[i]
        i++;
    }
    return s.length;
};