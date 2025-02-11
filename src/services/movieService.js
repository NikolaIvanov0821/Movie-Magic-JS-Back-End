import { v4 as uuid } from "uuid"
import Movie from "../models/movie.js";


const movieService = {
    getAll(filter = {}) {
        const query = Movie.find({});

        return query
    },
    create(newMovie) {
        console.log(newMovie);
        const rating = Number(newMovie.rating);
        const year = Number(newMovie.year);
        console.log(rating);

        return Movie.create({
            ...newMovie,
            rating: rating,
            year: year
        });
    }
}

export default movieService