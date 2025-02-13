import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";

const moviesController = Router();

moviesController.get('/create', (req, res) => {
    res.render('create');
});

moviesController.post('/create', async (req, res) => {
    const movieData = req.body;

    try {
        const movie = await movieService.create(movieData);
        res.status(200).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400);
    }

    //res.render('home', {layout: false});
});

moviesController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await movieService.getOne(id);
        const cast = await castService.getAll(id);
        console.log(movie);
        console.log(cast);
        res.render('details', { movie, cast });
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

export default moviesController;