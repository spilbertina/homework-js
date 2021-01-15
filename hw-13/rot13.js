function rot13(str) {
    let result = '';

    for (let i = 0; i != str.length; i++) {
        result += codeLetter(str[i])
    }

    return result;
}

function offsetSelector(letterIndex) {
    //|0           |13          |26          |39         |51
    //ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    switch (true) {
        case letterIndex >= 0 && letterIndex <= 12:
            return letterIndex += 13;
        case letterIndex >= 13 && letterIndex <= 25:
            return letterIndex -= 13;
        case letterIndex >= 26 && letterIndex <= 38:
            return letterIndex += 13;
        case letterIndex >= 39 && letterIndex <= 51:
            return letterIndex -= 13;
        default:
            return -1;
    }
}

function codeLetter(letter) {
    const key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const letterIndex = key.indexOf(letter);

    return letterIndex >= 0 ?
        key[offsetSelector(letterIndex)] :
        letter;
}

console.log(rot13(process.argv[2]));