function notation() {
    let num1 = +prompt();
    let num2 = +prompt();
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return null;
    return +num1.toString(num2)
}
