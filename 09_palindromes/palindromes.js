const palindromes = function (iPossiblePalindrome) {
    const aStrippedString = iPossiblePalindrome.replace(/[^0-9A-Za-z]/gi, '');
    const aPossiblePalindromeArray = aStrippedString.split("");
    const aRevertedPossiblePalindromeArray = aPossiblePalindromeArray.slice().reverse();
    let aPalindrome = true;
    for (let i = 0; i < aPossiblePalindromeArray.length; i++)
    {
        if (aPossiblePalindromeArray[i].toUpperCase() !== aRevertedPossiblePalindromeArray[i].toUpperCase())
        {
            aPalindrome = false;
            break;
        }
    }
    return aPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
