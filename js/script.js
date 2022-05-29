"use strict";


// task 2
//console.log(`///////////////////`);
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        
        personalMovieDB.count = prompt("Hom many films have you watched?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Hom many films have you watched?", "");
        }    
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let filmName = prompt("One of the latest film?", "").trim(),
                ratefilmName = prompt("How would you rate it?", "").trim();
            
            if (filmName != null && filmName != '' &&
                 ratefilmName != null && ratefilmName != ''&& filmName.length < 50){
        
                personalMovieDB.movies[filmName] = ratefilmName;
            } else {
                i--;
            }
        }
    },
    detectPersonalLever: function  () {
        if (personalMovieDB.count < 10) {
            alert('You watched not much films');
        } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
            alert('You are classic viewer');
        } else if (personalMovieDB.count > 30) {
            alert('You are kinoman');
        } else {
            alert('An error occurd');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(`result of function showMyDB`);
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for(let i=0; i<3; i++) {
            let answer = prompt(`Write your havorite genres ${i+1}: `,'');
            while (answer == '' || answer == null) {
                alert('You entered wrong data');
                answer = prompt(`Write your havorite genres ${i+1}: `,'');
            }
            personalMovieDB.genres[i]=answer;
        }
        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Favorite genre ${index+1} - ${value}`);
        });
    }
};


