export function addition(array) {
    let accumulate = 0;
    for (let i in array) {
        accumulate = accumulate + array[i];
    }
    return transformFormat(accumulate);
}

export function transformFormat(value) {
    if (Number.isInteger(value)) {
        return Number(value).toFixed(0);
    } else {
        return value.toFixed(3);
    }
}
