import { Router } from "express";

import * as ligaController from "../controllers/ligaController.js";

const router = Router();

// /liga/herois
router.get("/herois", ligaController.herois);

// /liga/viloes
router.get("/viloes", ligaController.viloes);

export default router;
