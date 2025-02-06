import { Router } from "express";
import homeController from "./controllers/homeController.js";

const router = Router();

router.use(homeController)

router.get('**', (req, res) => {
    res.render('404', { layout: false });  
});

export default router