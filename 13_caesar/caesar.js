/**
 * 
 * @param {string} iUncodedString input string to be encoded
 * @param {number} iShift number of places to shift each character
 */
const caesar = function(iUncodedString, iShift) {
    const aUncodedStringArray = iUncodedString.split("");
    for (let i = 0; i < aUncodedStringArray.length; ++i)
    {
        if (aUncodedStringArray[i].match(/[^0-9a-zA-Z]/gi))
        {
            continue;
        }
        // Wraping mechanism to prevent inclusion of undesired characters where the current one
        // is at the border of the "chars" territory within ASCII
        // Upper cases wrapping
        if (aUncodedStringArray[i].charCodeAt(0) >= 65 && aUncodedStringArray[i].charCodeAt(0) <= 90)
        {
            aUncodedStringArray[i] = String.fromCharCode((((iShift % 26) + (aUncodedStringArray[i].charCodeAt(0) - 65)) % 26) + 65);
            while (aUncodedStringArray[i].charCodeAt(0) < 65)
            {
                aUncodedStringArray[i] = String.fromCharCode(26 + aUncodedStringArray[i].charCodeAt(0));
            }
        }
        // Lower case wrapping
        else if (aUncodedStringArray[i].charCodeAt(0) >= 97 && aUncodedStringArray[i].charCodeAt(0) <= 122)
        {
            aUncodedStringArray[i] = String.fromCharCode((((iShift % 26) + (aUncodedStringArray[i].charCodeAt(0) - 97)) % 26) + 97);
            while (aUncodedStringArray[i].charCodeAt(0) < 97)
            {
                aUncodedStringArray[i] = String.fromCharCode(26 + aUncodedStringArray[i].charCodeAt(0));
            }
        }
    }
    return aUncodedStringArray.join("");
};

// Do not edit below this line
module.exports = caesar;
