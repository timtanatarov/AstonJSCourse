const deleteElementFromArray = (arr, elem) => {
    const resNumber = (!arr.find((currentElem) => currentElem === elem)) ? arr : elem;
    const resArray = arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === resNumber) {
            resArray.splice(i, 1);
            break;
        }
    }
    return resArray;
};

