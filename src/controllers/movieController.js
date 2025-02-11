import { Router } from "express";
import movieService from "../services/movieService.js";

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
})

moviesController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await movieService.getOne(id);
        console.log(movie);
        res.render('details', { movie });
    } catch (error) {
        console.log(error);
        res.status(400)
    }
})

export default moviesController;