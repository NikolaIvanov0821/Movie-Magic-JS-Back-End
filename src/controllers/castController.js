import { Router } from "express";
import castService from "../services/castService.js";
import movieService from "../services/movieService.js";

const castController = Router();

castController.get('/create/cast', (req, res) => {
    res.render('cast-create');
});

castController.post('/create/cast', (req, res) => {
    const body = req.body;
    try {
        const cast = castService.create(body);
        res.status(200).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400)
    }
});

castController.get('/attach/cast/:id', async (req, res) => {
    const movieId = req.params.id;

    try {
        const movie = await movieService.getOne(movieId);
        const cast = await castService.getAll();
        console.log(movie);
        console.log(cast);

        res.render('cast-attach', { movie, cast });
    } catch (error) {
        console.log(error);
        res.status(400)
    }

});

export default castController;