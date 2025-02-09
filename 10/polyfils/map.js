
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        const result = []
        const currArr = this
        for (let i=0 ; i<currArr.length ; i++) {
            const newValue = userFn(currArr[i], i)
            result.push(newValue)
        }

        return result
    }
}

// Signature : 
// returns a new array
// returns a new array where each element is updated as per the method passed by user

arr = [1, 2, 3]
const n = arr.myMap(e => e*2)
console.log(arr)
console.log(n)
