module.exports = function parseStringAsString(arrayAsString) {

    if (typeof arrayAsString !== 'string') {
        return [];
    }

    //trim() remove os espaços antes e depois do array
    return arrayAsString.split(',').map(string => {
        string = string.trim();
        string = string.toLowerCase();
        return string;
    });

}   