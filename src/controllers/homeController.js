import { Router } from "express";


const homeController = Router();

homeController.get('/', (req, res) => {
    res.render('home', { layout: false });  
});

homeController.get('/about', (req, res) => {
    res.render('about', {layout: false});  
});

export default homeController;