function concatTwoStrings(string1, string2) {
    const result = string1 + string2;
    //const result = `${string1}${string2}`;
    
    return result.length < 20 ?
        result : 
        result.substring(0, 20) + '...';
}

const result = concatTwoStrings(process.argv[2], process.argv[3]);
console.log (result);