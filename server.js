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

    toString(){
        return `${this.title} è un film di genere ${this.genre} rilasciato nel ${this.year} che ha come valutazione ${this.rating}/5`;
    };
}

// Estensione Serie
class serie extends movieSerie{
    constructor (title, year, genre, rating, type, seasons){
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }
    toString(){
        return `${this.title} è una serie di genere ${this.genre} rilasciato nel ${this.year} che ha ${this.seasons} stagioni ed ha una valutazione di ${this.rating}/5`  ;
    };
}

// Creazione film e Serie
const filmSerie = [
        // Creazione serie televisive
        serie1 = new serie('Breaking Bad', 2008, 'Drammatico', 4 , 'Serie', 5),
        serie2 = new serie('Stranger Things', 2016, 'Horror', 3 , 'Serie', 4),
        serie3 = new serie('The Boys', 2019, 'Drammatico', 5 , 'Serie', 4),
        serie4 = new serie('how i met your mother', 2005, 'Sitcom', 4 , 'Serie', 9),

        // Creazione film
        film1 = new movieSerie('Talk to me', 2022, 'Horror', 3 , 'Film'),
        film2 = new movieSerie('V per vendetta', 2005, 'Azione', 5 , 'Film'),
        film3 = new movieSerie('Joker', 2019, 'Thriller', 4 , 'Film'),
        film4 = new movieSerie('Sinister', 2012, 'Horror', 3 , 'Film'),
]

// Filtrare per type e inserire in un array di nome film
const film = filmSerie.map(item => {
    let films = []
    if (item.type == 'Film'){
        films.push(item)
    }
    return films
})

// Filtrare per type e inserire in un array di nome serie
const serieTV = filmSerie.map(item => {
    let series = []
    if (item.type == 'Serie'){
        series.push(item)
    }
    return series
})


// console.log(`${film}`)
// console.log(`${serieTV}`)







http
    .createServer(function(req, res){
        res.writeHead(200, {
            "content-Type":"text/html; charset=utf-8"
        });
        res.end(
            `<h1>${film1}</h1>
             <h1>${serie1}</h1>`
        );
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
    })