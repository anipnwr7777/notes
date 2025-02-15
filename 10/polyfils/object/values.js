
if (!Object.myValues) {
    Object.myValues = function (obj) {
        let values = []
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                values.push(obj[key])
            }
        }
        return values
    }
}

/**
 * Signature:
 * returns a list of values for the corresponding keys present in the object.
 */

let obj = {
    first_name: 'anirudh',
    last_name: 'panwar'
}

const values = Object.myValues(obj);
console.log(values)