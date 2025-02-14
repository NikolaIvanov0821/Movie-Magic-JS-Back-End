import { v4 as uuid } from "uuid"
import Movie from "../models/movie.js";
import Cast from "../models/cast.js";


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
    create(newMovie, creatorId) {
        console.log(newMovie);
        const rating = Number(newMovie.rating);
        const year = Number(newMovie.year);
        console.log(rating);

        return Movie.create({
            ...newMovie,
            rating: rating,
            year: year,
            creator: creatorId
        });
    },
    attachCast(movieId, castId) {
        const movie = Movie.findByIdAndUpdate(movieId, {$push: {cast: castId}});
        const cast = Cast.findByIdAndUpdate(castId, {$set: {movie: movieId}});
        return { movie, cast };
    }
}

export default movieService