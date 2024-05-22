require('dotenv').config();

const { match } = require('assert');
const { config } = require('dotenv');

const http = require("http");
const host = process.env.host
const port = process.env.port

// Classe movie&Serie
class movieSerie{
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }
}

// Estensione Serie
class serie extends movieSerie{
    constructor (title, year, genre, rating, type, seasons){
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }
}


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