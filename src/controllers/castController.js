import { Router } from "express";
import castService from "../services/castService.js";

const castController = Router();

castController.get('/create/cast', (req, res) => {
    res.render('cast-create');
});

castController.post('/create/cast', (req, res) => {
    const query = req.query;
    console.log(query);
    try {
        const cast = castService.create(query);
        res.status(200).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400)
    }
})

export default castController;