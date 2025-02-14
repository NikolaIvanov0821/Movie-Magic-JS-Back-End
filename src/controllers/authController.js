import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('register')
});

authController.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        const user = await authService.register(userData);
        res.cookie('auth', user, { httpOnly: true })
        res.status(200).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400);
    }
});

authController.get('/login', (req, res) => {
    res.render('login')
});

authController.post('/login', async (req, res) => {
    const userData = req.body;

    try {
        const user = await authService.login(userData);
        res.cookie('auth', user, { httpOnly: true })
        res.status(200).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400);
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

export default authController;