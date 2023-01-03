function createDebounceFunction(callback, delay) {
    let timeout;

    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    };
}

// or just use debounce from lodash, lol