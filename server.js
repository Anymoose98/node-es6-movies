require('dotenv').config();

const { match } = require('assert');
const { config } = require('dotenv');

const http = require("http");
const host = process.env.host
const port = process.env.port

http
    .createServer(function(req, res){
        res.writeHead(200, {
            "content-Type":"text/html; charset=utf-8"
        });
        res.end(
            `<h1>Server on</h1>`
        );
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
    })