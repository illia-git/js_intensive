function selectFromInterval(numbers, intervalStart, intervalEnd) {
    if (!Array.isArray(numbers) || !numbers.every(number => typeof number === 'number')) {
        throw new Error('The first parameter must be an array of numbers');
    }
    if (typeof intervalStart !== 'number' || typeof intervalEnd !== 'number') {
        throw new Error('The interval values must be numbers');
    }
    let start = intervalStart < intervalEnd ? intervalStart : intervalEnd;
    let end = intervalStart < intervalEnd ? intervalEnd : intervalStart;
    return numbers.filter(number => number >= start && number <= end);
}
