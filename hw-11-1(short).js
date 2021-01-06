const word = process.argv[2];

word.length < 10 ?
    console.log ('Подходит!') :
    console.log ('Слишком длинное слово :(');