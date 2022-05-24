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

let filmName1 = prompt("One of the latest film?","");
let ratefilmName1 = prompt("How would you rate it?","");
let filmName2 = prompt("One of the latest film?","");
let ratefilmName2 = prompt("How would you rate it?","");
const movies = {};
personalMovieDB.movies[filmName1] = ratefilmName1;
personalMovieDB.movies[filmName2] = ratefilmName2;
console.log(personalMovieDB);