// SINGLE DEFAULT IMPORT
import movies from "./movies.db.js"
// MULTI DEFAULT IMPORT 
import moviesService from "./movies.service.js";



// printMovies([]) // WILL THROW ERROR
console.log(moviesService)
moviesService.printMovies(movies);

const filteredMovies = moviesService.moviesByCategory(movies, "Comedy");
/**RESULT:
 * 
[
    { name: 'Dumb and Dumber', category: 'Comedy' },
    { name: 'Ace Ventura', category: 'Comedy' }
]
 */
console.log(filteredMovies)