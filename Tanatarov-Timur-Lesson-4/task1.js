Array.prototype.filterArray = function (callback, thisArg) {
    if (!Array.isArray(this) || !this.length || typeof callback !== 'function'){
        return []
    } else {
        callback = callback.bind(thisArg);
        let result = [];
        for (let i = 0; i < this.length; i++){
            if (callback(this[i], i, this)){
                result.push(this[i]);
            }
        }

        return result
    }
};




