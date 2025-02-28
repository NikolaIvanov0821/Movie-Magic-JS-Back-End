import { Router } from "express";
import castService from "../services/castService.js";
import movieService from "../services/movieService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const castController = Router();

castController.get('/create/cast', isAuth, (req, res) => {
    res.render('cast-create');
});

castController.post('/create/cast', isAuth, (req, res) => {
    const body = req.body;
    try {
        const cast = castService.create(body);
        res.status(200).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400)
    }
});

castController.get('/attach/cast/:id', isAuth, async (req, res) => {
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

castController.post('/attach/cast/:id', isAuth, async (req, res) => {
    const movieId = req.params.id;
    const castId = req.body;

    try {
        await movieService.attachCast(movieId, castId);
        res.redirect(`/details/${movieId}`);
    } catch (error) {
        console.log(error);
        res.status(400);
    }
});

export default castController;