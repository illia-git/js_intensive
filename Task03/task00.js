function makeObjectDeepCopy(obj) {
    if (Array.isArray(obj)) {
        let copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = makeObjectDeepCopy(obj[i]);
        }
        return copy;
    } else if (typeof obj === 'object' && obj !== null) {
        let copy = {};
        for (let key in obj) {
            copy[key] = makeObjectDeepCopy(obj[key]);
        }
        return copy;
    } else {
        return obj;
    }
}
