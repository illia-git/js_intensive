function calculation() {
    const promptAndConvert = () => {
        let input = prompt("Enter a number:");
        try {
            return parseFloat(input);
        } catch(e) {
            return NaN;
        }
    }

    let input1 = promptAndConvert();
    let input2 = promptAndConvert();

    if (isNaN(input1) || isNaN(input2)) throw new Error("Invalid input");

    const SUM = input1 + input2;
    const QUOTIENT = Math.floor(input1 / input2);
    return `Answer: ${SUM}, ${QUOTIENT}`;

}
