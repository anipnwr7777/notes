
if (!Array.prototype.myFind) {
    Array.prototype.myFind = function (userFn) {
        for (let i=0 ; i<this.length ; i++) {
            if(userFn(this[i])) {
                return this[i]
            }
        }
        return undefined;
    }
}

/**
 * Signature : .find accepts a method which will be executed for each element in the array and find element which matches the condition will be returned, else undefined will be returned.
 */

let arr = [1, 2, 3]
const val = arr.myFind((value) => {return value > 2})
console.log(val)