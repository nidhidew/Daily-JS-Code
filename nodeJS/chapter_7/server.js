const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./logEvents');
const errorHandler = require('./errorHandler');
const PORT = process.env.PORT || 3000;

//custom middleware logger
app.use(logger);
// built-in middleware to handle urlencoded data in other words, form data: 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));
// built-in middleware for json
app.use(express.json());
// serve static files
app.use(express.static(path.join(__dirname, '/public'))); 

/**Cross Origin Resource Sharing 
 * 
 * const whilelist = ['http://www.yoursite.com','http://127.0.0.1:5500'];
 * const corsOptions = {
 * origin: (origin, callback) => {
 *    if(whilelist.indexOf(origin) !== -1 || !origin) {
 *      callback(null, true)
 *    } else {
 *      callback(new Error('Not allowed by CORS));
 *    }
 * }, optionsSuccessStatus: 200
 * }
*/

// using express get request
app.get('^/$|/index(.html)?', (req, res) => {
    // res.send('Hello World!');
    // res.sendFile('./views/index.html', { root:__dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.get('/new_page(.html)?', (req, res) => {
    // res.send('Hello World!');
    // res.sendFile('./views/index.html', { root:__dirname });
    res.sendFile(path.join(__dirname, 'views', 'new_page.html'))
});

app.get('/old_page(.html)?', (req, res) => {
    // res.send('Hello World!');
    // res.sendFile('./views/index.html', { root:__dirname });
    res.redirect(301, 'new_page.html');
});

// using express routing and middleware
app.get('/hello(.html)?', (req,res,next) => {
    console.log('attempted to load hello.html');
    next()
}, (req,res) => {
    res.send('hello world!');
});

//chaining route handlers
const one = (req,res,next) => {
    console.log('one');
    next();
} 
const two = (req,res,next) => {
    console.log('two');
    next();
}
const three = (req,res) => {
    console.log('three');
    res.send('Finished !');
}

app.get('/chain(.html)?', [one,two,three]);

app.all('/*', (req,res) => {
    res.status(404);
    if(req.accepts('html')){
    res.status(404).sendFile(path.join(__dirname, 'views' , '404.html'));
    } else if(req.accepts('json')){
        res.json({error: "404 not found"});
    } else {
        res.type('txt').send("404 not found");
    }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

