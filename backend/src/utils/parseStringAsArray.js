module.exports = function parseStringAsString(arrayAsString) {

    //trim() remove os espaços antes e depois do array
    return arrayAsString.split(',').map(i => i.trim());

}   