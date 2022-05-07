const leapYears = function(iYear) {
    if (iYear % 4 === 0)
    {
        if (iYear % 100 === 0 && !(iYear % 400 === 0))
        {
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
