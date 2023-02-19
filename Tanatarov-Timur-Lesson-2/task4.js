const getUniqArray = arr => {
    arr.forEach(value => {
        if (typeof value !== 'number') {
            throw Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел.');
        }
    });
    return Array.from(new Set(arr));
};
