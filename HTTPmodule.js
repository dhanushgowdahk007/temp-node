const http = require('http');

const server = http.createServer( (req, res) => {
    if(req.url === '/'){
        res.end('Welcome to the page');
    }
    if(req.url === '/about'){
        res.end('This is the about page');
    }
    res.end(`
            <h1>Oops!</h1>
            <p>Page not found</p>
            <a href='/'>Back to home page</a>
        `)
})

server.listen(5000)