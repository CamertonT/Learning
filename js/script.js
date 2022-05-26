"use strict";

let numberOfFilms;


function start () {
    numberOfFilms = prompt("Hom many films have you watched?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Hom many films have you watched?", "");
    }

}

start();

// task 2
//console.log(`///////////////////`);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

//console.log(personalMovieDB);
//console.log(`///////////////////`);

// task 3

function rememberMyFilms () {
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
}

//rememberMyFilms();

//console.log(personalMovieDB);
//console.log(`///////////////////`);

function detectPersonalLever () {
    if (personalMovieDB.count < 10) {
        alert('You watched not much films');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
        alert('You are classic viewer');
    } else if (personalMovieDB.count > 30) {
        alert('You are kinoman');
    } else {
        alert('An error occurd');
    }
}

detectPersonalLever();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(`result of function showMyDB`);
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for(let i=0; i<3; i++) {
        let answer = prompt(`Write your havorite genres ${i+1}: `,'');
        while (answer == '' || answer == null) {
            answer = prompt(`Write your havorite genres ${i+1}: `,'');
        }
        personalMovieDB.genres[i]=answer;
    }
}
writeYourGenres();
console.log(personalMovieDB);