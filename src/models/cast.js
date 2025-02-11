import { Schema, Types, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: 'Name is required'
    }, 
    age: {
        type: Number,
        required: 'Age is required',
        min: 0,
        max: 99
    },
    born: {
        type: String,
        required: 'Born is required'
    },
    movieName: {
        type: String,
        required: 'Movie name is required'
    },
    castImageURL: {
        type: String,
        required: 'ImageURL is required'
    },
    movie: {
        type: Types.ObjectId,
        ref: 'Movie'
    }
});

const Cast = model('Cast', castSchema);

export default Cast;