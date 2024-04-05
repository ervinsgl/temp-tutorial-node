const http = require('http')
const server = http.createServer((req,res)=>{
    //console.log(req);
    if(req.url === '/'){
        res.end('Hello in HOMEPAGE')
    }
    else if(req.url === '/about'){
        res.end('ABOUT WHAT?')
        return
    } else {
        res.end(`
    <h1>Whoopsie!</h1>
    <p>We can't see you</p>
    <a href="/">back home</a>
    `)}
})

server.listen(5000)