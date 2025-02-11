import { Schema, Types, model } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: 'Title is required'
    }, 
    category: {
        type: String,
        required: 'Category is required'
    }, 
    genre: {
        type: String,
        required: 'Genre is required'
    }, 
    director: {
        type: String,
        required: 'Director is required'
    }, 
    year: {
        type: Number,
        required: 'Year is required',
        min: 1888,
        max: 2025
    }, 
    imageURL: {
        type: String,
        required: 'ImageURL is required'
    }, 
    rating: {
        type: Number,
        required: 'Rating is required',
        min: 0,
        max: 5
    }, 
    description: {
        type: String,
        required: 'Description is required'
    }, 
    cast: [{
       type: Types.ObjectId,
       ref: 'Cast'
    }]
});

const Movie = model('Movie', movieSchema);

export default Movie;