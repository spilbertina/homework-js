function checkStringLength(word) {
    const wordLenght = word.length;

    if (wordLenght < 10) {
        return true;
    }

    return false;
}

const result = checkStringLength(process.argv[2]);

if (result) {
    console.log('Подходит!');
}
else {
    console.log('Слишком длинное слово :(');
}

