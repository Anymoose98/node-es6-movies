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

// Creazione serie televisive
const serie1 = new TvSerie('Breaking Bad', 2008, 'Drammatico', 4 , 'Serie', 5);
const serie2 = new TvSerie('Stranger Things', 2016, 'Horror', 3 , 'Serie', 4);
const serie3 = new TvSerie('The Boys', 2019, 'Drammatico', 5 , 'Serie', 4);
const serie4 = new TvSerie('how i met your mother', 2005, 'Sitcom', 4 , 'Serie', 9);

// Creazione film
const film1 = new movieSerie('Talk to me', 2022, 'Horror', 3 , 'Film');
const film2 = new movieSerie('V per vendetta', 2005, 'Azione', 5 , 'Film');
const film3 = new movieSerie('Joker', 2019, 'Thriller', 4 , 'Film');
const film4 = new movieSerie('Sinister', 2012, 'Horror', 3 , 'Film');








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