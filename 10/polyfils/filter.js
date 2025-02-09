
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn) {
        const newArr = []
        for (let i=0 ; i<this.length; i++) {
            const allowed = userFn(this[i], i)
            if (allowed) {
                newArr.push(this[i])
            }
        }

        return newArr
    }
}


/**
 * signature : 
 * 1. takes an userFn on an array and returns a new array with all the elements filtered by the condition given by function
 */

let arr = [1, 2, 3]
const newArr = arr.myFilter(e => e%2==0)

console.log(arr)
console.log(newArr)