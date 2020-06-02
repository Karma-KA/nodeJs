
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title>nodejs basics test</title></header>');
        res.write('<body><h2>Greetings !!</h2>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    };

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end();
    };

    if (url === '/users') {
        res.setHeader('Content-Type','text/html');
        res.status = 200;
        res.write('<html>');
        res.write('<header><title>nodejs basics test</title></header>');
        res.write('<h2>List of Users</h2>');
        res.write('<ul><li>User-1</li></ul>');
        res.write('</html>');
        return res.end();
    };

    res.setHeader('Content-Type','text/html');
    res.status = 404;
    res.write('<html>');
    res.write('<header><title>nodejs basics test</title></header>');
    res.write('<body><h2>Page not found !!</h2>');
    res.write('</body>');
    res.write('</html>');
    res.end();
};

exports.handler=requestHandler;