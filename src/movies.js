// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArr = moviesArray.map((currentMovie /*,currentIndex, array */)=>{
        return currentMovie.director;
    }) // or moviesArray.map(functioncurrentElement, currentIndex, array){})
    return directorArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter(movie => // const spielbergDramaMovies = moviesArray.filter(function(movie) {}
        movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')
      );

      return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) {
        return 0;
    }

    const scoreSum = moviesArray.reduce((sum, movie) => sum + movie.score, 0);

    const scoreAvg = scoreSum / moviesArray.length;

    return Math.round(scoreAvg * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    
    if (dramaMovies.length == 0) {
        return 0;
    }

    const scoreSum = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);

    const scoreAvg = scoreSum / dramaMovies.length;

    return Math.round(scoreAvg * 100) / 100;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const movieYear = moviesArray.slice();

    movieYear.sort((a, b ) => {
        if (a.year === b.year) {
            return a.title.localCompare(b.title);
        }
        return a.year - b.year;
    });

    return movieYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
