import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('register')
});

authController.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        await authService.register(userData);
        res.status(200).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400);
    }
});

export default authController;