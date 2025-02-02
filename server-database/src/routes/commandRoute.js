import express from "express";

import * as commandController from "../controllers/commandController.js";

const router = express.Router();

router.get("/commands", commandController.getCommands);

router.post("/commands", commandController.addCommand);

export default router;
