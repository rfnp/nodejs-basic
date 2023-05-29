const fs = require('fs');
const { resolve } = require('path')
 
const readableStream = fs.createReadStream(resolve(__dirname, './input.txt'), {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
    try {
        //process.stdout.write(`[${readableStream.read()}\n]`);
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error) {
        console.log(error)
    }
});
 
readableStream.on('end', () => {
    writableStream.end();
    console.log('\nDone');
});