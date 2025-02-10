import { Router } from "express";
import movieService from "../services/movieService.js";

const moviesController = Router();

moviesController.get('/create', (req, res) => {
    res.render('create', { layout: false });
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

export default moviesController;