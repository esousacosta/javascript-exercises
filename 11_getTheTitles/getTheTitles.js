/**
 * 
 * @param {Array} iBooksArray my dictionnary of books and titles
 */
const getTheTitles = function(iBooksArray) {
    const aBookTitlesList = iBooksArray.map((element) => {return element['title'];});
    return aBookTitlesList;
};

// Do not edit below this line
module.exports = getTheTitles;
