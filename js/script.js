"use strict";

let numberOfFilms = prompt("Hom many films have you watched?", "");
console.log(`I have watched - ${numberOfFilms} films`);

// task 2
console.log(`///////////////////`);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);
console.log(`///////////////////`);

// task 3

 for (let i = 0; i < 2; i++) {
    let filmName = prompt("One of the latest film?", ""),
        ratefilmName = prompt("How would you rate it?", "");
    
    if (filmName != null && filmName != '' &&
         ratefilmName != null && ratefilmName != ''&& filmName.length < 50){

        personalMovieDB.movies[filmName] = ratefilmName;
    } else {
        i--;
    }
}

console.log(personalMovieDB);
console.log(`///////////////////`);

if (personalMovieDB.count < 10) {
    alert('You watched not much films');
} else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
    alert('You are classic viewer');
} else if (personalMovieDB.count > 30) {
    alert('You are kinoman');
} else {
    alert('An error occurd');
}
