function findAllPrimes(n) {
    if (n === 0) {
        return 0;
    }

    for (let i = 1; i <= n; i++) {
        let k = 0;
        for (let j = 2; j <= n / 2; j++) {
            if (i % j === 0 && j != i) {
                k++;
            }
        }
        if (k === 0) {
            console.log(i)
        }
    }
}

findAllPrimes(100);