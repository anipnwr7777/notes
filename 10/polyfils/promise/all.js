




const main = async () => {

    if(!Promise.myAll) {
        Promise.myAll = async function(promises) {
            return  new Promise((resolve, reject) => {
                let resolved_values = new Array(promises.length)
                let counter = 0;
                for (let i=0 ; i<promises.length ; i++) {
                    promises[i]
                        .then((data) => {
                            counter++;
                            resolved_values[i] = data
                            if (counter == promises.length) {
                                resolve(resolved_values);
                            }
                        })
                        .catch(() => {reject('rejected')})
                }
            })
        }
    }



    const promise = async (time, status, data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                switch(status) {
                    case 'resolve':
                        resolve(data)
                        break;
                    case 'reject':
                        reject('network failure')
                        break;
                }
            }, time)
        })
    }
    
    const promise_1s_resolve = promise(1000, 'resolve', 5)
    const promise_3s_resolve = promise(3000, 'resolve', 3)
    const promise_10s_resolve = promise(10000, 'resolve', 20)
    // const promise_1s_reject = promise(1000, 'reject', 5)
    // const promise_10s_reject = promise(10000, 'reject', 3)

    let promiseArray = [
        promise_1s_resolve, 
        promise_3s_resolve, 
        promise_10s_resolve,
        // promise_1s_reject,
        // promise_10s_reject,
    ]
    // Promise.all(promiseArray).then(() => {console.log('done')}).catch(() => {console.log('rejected')})
    try {
        const resolved_values = await Promise.myAll(promiseArray)
        console.log(resolved_values)
    } catch (err) {
        console.log('some rejection found, ', err)
        // console.log("waiting for all promises to get resolved and the event loop to get empty")
    }
}

main()