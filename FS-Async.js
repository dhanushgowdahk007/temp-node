const { readFile, writeFile } = require('fs');

readFile('NODEJS\\subfolder\\first.txt', 'utf-8',(err, result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('NODEJS\\subfolder\\second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('NODEJS\\subfolder\\result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})