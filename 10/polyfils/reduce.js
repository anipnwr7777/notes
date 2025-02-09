
if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (userFn, initialValue) {
        for (let i=0 ; i<this.length ; i++) {
            initialValue = userFn(initialValue, this[i])
        }
        return initialValue
    }
}

/**
 * signature : 
 * 1. reduce takes a userFn (accumulator function) which runs on every value of the array and accumulates the value in accumulator and returns the final accumulated value
 */

let arr = [1, 2, 3]
const result = arr.myReduce((accumulator, currValue) => {return accumulator + currValue}, 0)
console.log(result)