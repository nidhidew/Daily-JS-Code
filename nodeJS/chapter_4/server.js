const http = require('http');
let path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const logEvents = require('../chapter_3/logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

//initialize object

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg));
const PORT = process.env.PORT || 3000;
const serveFile = async(filePath,contentType,response) => {
    try{
        const rawData = await fsPromises.readFile(filePath, 'utf-8');
        const data = contentType === 'application/json' ? JSON.parse(rawData) : rawData;
        response.writeHead(200, {'Content-Type': contentType});
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        );
    }catch(err){
        console.log(err);
        response.statusCode=500;
        response.end();
    }
}
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    myEmitter.emit('log', `${req.url} : ${req.method}`, 'reqLog.txt');

    // we can use this method...
    // if(req.url === '/' || req.url === 'index.html'){
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type','text/html');
    //     path = path.join(__dirname, 'index.html');
    //     fs.readFile(path,'utf-8',(err,data) => {
    //         res.end(data);
    //     });
    // }

    //or

    const extension = path.extname(req.url);
    let contentType;

    switch(extension){
        case '.css':
            contentType='text/css';
            break;
        case '.js':
            contentType='text/javascript';
            break;
        case '.json':
            contentType='application/json';
            break;
        default:
            contentType='text/html';            
    }

    let filePath = contentType === 'text/html' && req.url === '/' ? path.join(__dirname, 'views', 'index.html') 
                : contentType === 'text/html' && req.url.slice(-1) === '/' ? path.join(__dirname, 'views', req.url, 'index.html')
                : contentType === 'text/html' ? path.join(__dirname, 'view', req.url)
                : path.join(__dirname, req.url);

    // makes .html extension not required in the browser            
    if(!extension && req.url.slice(-1) !== '/') 
        filePath += '.html';            


    const fileExists = fs.existsSync(filePath);

    if(fileExists){
        //serve the file
        serveFile(filePath,contentType,res);
    }else{
        // 404
        // 301 redirect
        // console.log(path.parse(filePath));
        switch (path.parse(filePath).base){
            case 'old_index.html':
                res.writeHead(301, {'Location': '/new_index.html'});
                res.end();
                break;
            case 'index.html':
                res.writeHead(301, {'Location': '/'});
                res.end();
                break;
            default:
                //serve a 404 response   
                serveFile(path.join(__dirname, 'views', '404.html'),contentType,res);     
        }
    }
});
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg));

// setTimeout(() => {
//     myEmitter.emit('log', 'Log event emitted')
// }, 2000);