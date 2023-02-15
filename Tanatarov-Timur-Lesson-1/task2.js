const getNumberRadix = (number, radix) => {
    if (+number % 1 === 0 && (radix > 1 && radix < 17)) {
        return (+number).toString(radix);
    }
    throw Error ('Функция getNumberRadix была вызвана с некорректными параметрами');
};
