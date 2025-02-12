import { Router } from "express";
import homeController from "./controllers/homeController.js";
import moviesController from "./controllers/movieController.js";
import castController from "./controllers/castController.js";

const router = Router();

router.use(homeController);
router.use(moviesController);
router.use(castController);

export default router;