function fizzBuzz(x) {
    switch (true) {
        case x % 3 === 0 && x % 5 === 0:
            console.log('FizzBuzz');
            break;
        case x % 3 === 0:
            console.log('Fizz');
            break;
        case x % 5 === 0:
            console.log('Buzz');
            break;
        default:
            console.log(x);
    }
}

    for (let number = 1; number <= 30; number++) {
        fizzBuzz(number);
    }