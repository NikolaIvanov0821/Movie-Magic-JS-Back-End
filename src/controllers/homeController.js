import { Router } from "express";
import movieService from "../services/movieService.js";


const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await movieService.getAll()
    res.render('home', { movies });  
});

homeController.get('/about', (req, res) => {
    res.render('about');  
});

homeController.get('/404', (req, res) => {
    res.render('404')
})

homeController.get('*', (req, res) => {
    res.redirect('404')
})

export default homeController;