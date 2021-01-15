function rowGenerate(lenght) {
    let row = [];
    for (let i = 0; i < lenght; i++) {
        row.push(i+1);
    }

    return row;
}

function generate(numberCount, arraysCount) {
    let array = [];
    for (let i = 0; i < arraysCount; i++) {
        array.push(rowGenerate(numberCount))
    }

    return array;
}

console.log(generate(3, 3))