const fs = require('fs');

const readFromFile = async function (path) {
    const data = await fs.readFile('a.txt', 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    })
};


async function readData() {
    const data = await fs.readFile('file.txt');
    return data;
}

let sum = 0;
for (let i = 0; i < 10000000; i++) {
    sum = sum + i;
}
console.log(sum);