function myFilter(array, callback, thisArg) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback.call(thisArg, array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
