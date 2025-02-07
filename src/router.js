import { Router } from "express";
import homeController from "./controllers/homeController.js";
import moviesController from "./controllers/movieController.js";

const router = Router();

router.use(homeController);
router.use(moviesController);

export default router;