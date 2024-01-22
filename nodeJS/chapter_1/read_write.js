// chapter 1

// console.log('hello server');
// ---------------------------------------------

// READ AND WRITE FILES

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

// fs.readFile('node_notes.txt', 'utf8', (err,data) => {
//     if(err)
//         throw err;
//     console.log(data);
// })

// fs.readFile(path.join(__dirname, 'node_notes.txt'), 'utf8' ,(err,data) => {
//     if (err) throw err;
//     console.log(data);
// })


// fs.writeFile(path.join(__dirname, 'test.txt'), 'utf8' ,(err) => {
//     if (err) throw err;
//     console.log('Operation Complete');
// })

// fs.appendFile(path.join(__dirname, 'test.txt'), 'Testing text', (err) => {
//     if(err) throw err;
//     console.log(('Append complete'));
// })

// fs.rename(path.join(__dirname,'test.txt'), path.join(__dirname,'new_testText.txt'),(err) => {
//     if(err) throw err;
//     console.log('file renaming completed'); 
// })

/** to make a sync process for write,append and then rename the file but its a callback hell for longer code*/
//  fs.writeFile(path.join(__dirname, 'test.txt'), 'utf8' ,(err) => {
//     if (err) throw err;
//     console.log('Operation Complete');

//     fs.appendFile(path.join(__dirname, 'test.txt'), 'Testing text', (err) => {
//         if(err) throw err;
//         console.log(('Append complete'));

//         fs.rename(path.join(__dirname,'test.txt'), path.join(__dirname,'new_testText.txt'),(err) => {
//             if(err) throw err;
//             console.log('file renaming completed'); 
//         })
//     })
// })

const fileops = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'text.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'text.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname,'promiseWriter.txt'), '  nice to meet you');
        await fsPromises.rename(path.join(__dirname, 'promiseWriter.txt'),path.join(__dirname, 'promiseCompleted.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'promiseCompleted.txt'), data);
        console.log(newData);
    }catch (err) {
        console.error(err)
    }
}

fileops();
//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});