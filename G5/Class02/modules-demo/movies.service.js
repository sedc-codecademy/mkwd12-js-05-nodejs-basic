const printMovies = (moviesList) => {
    if(moviesList.length === 0) throw new Error('List was empty');

    moviesList.forEach((movie) => {
        console.log(`Movie name is: ${movie.name}`)
    })

};

const moviesByCategory = (moviesList, category) => {
    const filteredMovies = moviesList.filter((movie) => movie.category === category);

    return filteredMovies;
}

// const movieService = {
//     printMovies,
//     moviesByCategory
// }

// export default movieService;

// SAME AS ABOVE BUT A BIT SHORTER, WE EXPORT OBJECT CONTAINING 2 FUNCTIONS
// MULTI DEFAULT EXPORT 
export default {
    printMovies,
    moviesByCategory
};
