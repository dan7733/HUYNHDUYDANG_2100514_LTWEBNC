var http = require('http');
var date = require("./date");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    res.write(date() + "<br/>");
    res.write('Hello KTPM0121, chúc bạn thành công với Nodejs');
    res.end();
}).listen(8080);