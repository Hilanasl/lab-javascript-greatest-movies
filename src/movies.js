// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  const onlyDirectors = arrayOfMovies.map((movie) => {return movie.director})
  return onlyDirectors;
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const onlySpilberg = movies.filter (movie => 
    {return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')})
  return onlySpilberg.length; 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;
  const totalScores = movies.reduce ((acc, current) => {
    // hey Hilana : if the score is not here (empty string) ...
    // just add 0 to the rate instead of create a NaN
    const tmp = current.score ? current.score : 0;
    return acc + tmp;
  }, 0);
  const avg = totalScores/movies.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const onlyDramas = movies.filter (movie => {return movie.genre.includes('Drama')})
let total = 0
let onlyDramasScores = onlyDramas.map(movies => total += movies.score);
const avg = total/ onlyDramas.length;
return Number(avg.toFixed(2));
}
    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedMovies = movies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
   });
  return sortedMovies;
 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){ 
  const orderedMovies = movies.sort((a, b) => {
  if (a.title > b.title) {
    return 1;
  } else if (a.title < b.title) {
    return -1;
} else {
  return 0;
}
})
return orderedMovies.slice(0,20)
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
