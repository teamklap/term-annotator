const showThumbnail = require('./show-thumbnail')
module.exports = function (mainCatsInfo, index) {
    const gifNumber = index ? index : 0
    const classNames = Object.keys(mainCatsInfo);
    classNames.forEach((cN, index) => {
        if (mainCatsInfo[cN].numFiles > 0) {
            id = `im-${index}`
            showThumbnail(mainCatsInfo[cN].filenames[gifNumber], id);
        }
    })
}