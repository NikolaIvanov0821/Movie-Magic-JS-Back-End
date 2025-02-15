import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";
import Movie from "../models/movie.js";
import {isAuth} from "../middlewares/authMiddleware.js"

const moviesController = Router();

moviesController.get('/create', (req, res) => {
    res.render('create');
});

moviesController.post('/create', async (req, res) => {
    const movieData = req.body;
    const creatorId = req.user?._id

    try {
        const movie = await movieService.create(movieData, creatorId);
        res.status(200).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400);
    }

    //res.render('home', {layout: false});
});

moviesController.get('/details/:id', isAuth, async (req, res) => {
    const id = req.params.id;
    const user = req.user?._id;
    console.log(user);
    try {
        const movie = await movieService.getOne(id);
        const cast = await castService.getAll(id);

        let isCreator = movie.creator == user
        console.log(movie.creator);
        res.render('details', { movie, cast, isCreator });
    } catch (error) {
        console.log(error);
        res.status(400);
    }
});

moviesController.get('/search', async (req, res) => {
    const filter = req.query;
    console.log(filter);
    const movies = await movieService.getAll(filter)
    res.render('search', { movies }); 
});

moviesController.get('/edit/:id', isAuth, async (req, res) => {
    const id = req.params.id;
    const movie = await movieService.getOne(id);
    res.render('edit', {movie});
});

moviesController.post('/edit/:id', isAuth, async (req, res) => {
    const id = req.params.id;
    const updated = req.body;
    
    try {
        const movie = await Movie.findByIdAndUpdate(id, updated)
        res.status(200).redirect(`/details/${id}`);
    } catch (error) {
        console.log(error)
        res.status(400);
    }
});

moviesController.get('/delete/:id', isAuth, async (req, res) => {
    const id = req.params.id;

    try {
        await Movie.findByIdAndDelete(id);
        res.status(200).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(404);
    }
});

export default moviesController;