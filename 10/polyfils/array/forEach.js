
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFn) {
        const currArr = this
        for (let i=0 ; i<currArr.length ; i++) {
            userFn(currArr[i], i)
        }
    }
}

// Signature : 
// takes a function as parameter and applies that function to every element of the array

let arr = [1, 2, 3]
arr.myForEach(e => console.log(e+2))
