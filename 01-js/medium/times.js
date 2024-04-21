/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-1,00,000
3. Sum from 1-1,00,00,00,000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let start = new Date();
    startTime = start.getTime();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    let end = new Date();
    endTime = end.getTime();
    console.log(sum);
    return endTime - startTime;
}

console.log(calculateTime(100000000));