import { Router } from "express";
import castService from "../services/castService.js";

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



export default castController;