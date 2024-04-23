/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    promiseReturn = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve()
        }, n * 1000)

    })

    return promiseReturn
}

async function callIt() {
    const p = await wait(3);
    console.log(p)
    console.log('resolved aftr 3 seconds');
}

callIt();
module.exports = wait;
