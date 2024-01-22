const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

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

app.get('/*', (req,res) => {
    res.status(404).sendFile(path.join(__dirname, 'views' , '404.html'));
})



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

