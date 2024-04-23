/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep2(milliseconds) {

    promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });

    await promise1;
    console.log("Promise resolved now");
    return promise1
}

function sleep(ms) {

    return new Promise((resolve) => {
        startTime = Date.now();
        while (Date.now() - startTime < ms) {
            //busy wait
        }
        resolve();
    })

}

module.exports = sleep;
