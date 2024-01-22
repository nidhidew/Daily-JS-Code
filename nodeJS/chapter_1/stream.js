const fs = require('fs');
const rs = fs.createReadStream('node_notes.md', {encoding: 'utf8'});
const ws = fs.createWriteStream('lorem.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

//more efficient
rs.pipe(ws);