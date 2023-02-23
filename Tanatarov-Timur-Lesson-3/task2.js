const addElementsToArray = (arr, index) => {
    index = ((index === undefined) || index > arr.length - 1) ? arr.length : index;
    const resArr = arr;
    const addElemsFunc = (...args) => {
        if (index < 0 || index % 1 !== 0){
            return new Error ('the index cannot be a negative number or a fractional number');
        }
        resArr.splice(index, 0, ...args);
        return resArr;
    };
    return addElemsFunc;
};
