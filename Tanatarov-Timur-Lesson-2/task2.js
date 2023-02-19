const getInterval = (arr, from, to) => {
    if (typeof from !== 'number') {
        throw Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом.')
    }
    if (typeof to !== 'number') {
        throw Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом.')
    }
    arr.forEach(value => {
        if (typeof value !== 'number') {
            throw Error('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения.')
        }
    })

    return arr.filter(value => value >= Math.min(from, to) && value <= Math.max(from, to) && value);
};
