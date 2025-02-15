

if (!Object.myEntries) {
    Object.myEntries = function (obj) {
        let key_value_pairs = []
        for (let key in obj) {
            if(obj.hasOwnProperty(key)) {
                key_value_pairs.push([key, obj[key]])
            }
        }
        return key_value_pairs
    }
}

/**
 * Signature : 
 * returns a list of list containing key value pairs
 */

let obj = {
    first_name: 'anirudh',
    last_name: 'panwar'
}

const entries = Object.myEntries(obj)
console.log(entries)