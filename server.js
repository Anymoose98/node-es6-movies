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


const filmsAndSeries = [
    { 
        title: "Breaking Bad",
        year: 2008,
        genre: "Drammatico",
        rating: 4,
        type: "serie",
        seasons: 5,
    },
    { 
        title: "Stranger Things",
        year: 2016,
        genre: "Horror",
        rating: 3,
        type: "serie",
        seasons: 4,
    },
    { 
        title: "The Boys",
        year: 2019,
        genre: "Drammatico",
        rating: 5,
        type: "serie",
        seasons: 4,
    },
    { 
        title: "how i met your mother",
        year: 2005,
        genre: "Sitcom",
        rating: 4,
        type: "serie",
        seasons: 9,
    },
    { 
        title: "Talk to me",
        year: 2022,
        genre: "Horror",
        rating: 3,
        type: "film",
    },
    { 
        title: "V per vendetta",
        year: 2005,
        genre: "Azione",
        rating: 5,
        type: "film",
    },
    { 
        title: "Joker",
        year: 2019,
        genre: "Thriller",
        rating: 4,
        type: "film",
    },
    { 
        title: "Sinister",
        year: 2012,
        genre: "Horror",
        rating: 3,
        type: "film",
    },
    
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

// Media di un genere

// console.log(`${film}`)

// Sommo il rating e divido per la lunghezza dell'array precedente
const horrorFilms = film.filter(item => item.genre === 'Horror');
const sommaRating = horrorFilms.reduce((acc, item) => acc + item.rating, 0);
const mediaRating = horrorFilms.length ? sommaRating / horrorFilms.length : 0;
console.log(`${horrorFilms}`)



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