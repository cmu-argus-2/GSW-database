import express from "express";

import * as commandController from "../controllers/commandController.js";
import * as rxDataController from "../controllers/rxDataController.js";

const router = express.Router();

router.get("/commands", commandController.getCommands);

router.post("/commands", commandController.addCommand);

router.get("/rx", rxDataController.getRXData);

export default router;
