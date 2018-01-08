// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const charMap = {};
    maxValue = 0;
    outValue = "";

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        } 
    }

    for (let val in charMap) {
        if (charMap[val]>maxValue) {
            maxValue = charMap[val];
            outValue = val;
        }
    }

    return outValue;

    // console.log(charMap);
}

module.exports = maxChar;
