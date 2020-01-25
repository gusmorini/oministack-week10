module.exports = function parseStringAsString(arrayAsString) {

    // if (typeof arrayAsString !== 'string') {
    //     return [];
    // }


    // return arrayAsString.split(',').map(string => {
    //     string = string.trim();
    //     string = string.toLowerCase();
    //     return string;
    // });

    //trim() remove os espaços antes e depois do array
    //toLowerCase() transforma a string em caixa baixa para padronizar o texto no banco

    return arrayAsString.split(',').map(string => string.trim().toLowerCase());

}   