const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);


res.setHeader('content-Type','text/html');
res.write('<html>');
res.write('<header>first page</header>');
res.write('<body><h1>Hello nodejs</h1></body');
res.write('</html>');
res.end();

});
server.listen(2999);
