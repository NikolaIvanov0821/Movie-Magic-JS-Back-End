import { v4 as uuid } from "uuid"
import Movie from "../models/movie.js";


const movieService = {
    getAll(filter = {}) {
        let query = Movie.find({});
        
        if (filter.search) {
            query = query.where({ title: filter.search });
        }

        if (filter.genre) {
            query = query.where({ genre: filter.genre });
        }

        if (filter.year) {
            query = query.where({ year: Number(filter.year) })
        }

        return query;
    },
    getOne(id) {
        const query = Movie.findById(id);
        return query;
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
    },
    attachCast(movieId, cast) {
        const movie = Movie.findById(movieId)
        console.log(move);
    }
}

export default movieService