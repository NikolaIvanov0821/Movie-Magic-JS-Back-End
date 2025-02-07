import { v4 as uuid } from "uuid"
import Movie from "../models/movie.js";


const movieService = {
    create(newMovie) {
        const id = uuid();
        console.log(newMovie);
        const rating = Number(newMovie.rating);
        console.log(rating);

        return Movie.create({
            id: id,
            ...newMovie,
            rating: rating
        });
    }
}

export default movieService