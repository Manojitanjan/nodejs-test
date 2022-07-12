// Asynchronous way of reading file
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, results) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = results;

    readFile('./content/second.txt', 'utf8', (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = results;

        writeFile('./content/result-async.txt', `here is the results: ${first}, ${second}`, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(results);
        })
    })
})