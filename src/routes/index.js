const { Router } = require("express");
const { AuthRouter } = require("./auth");
const { UserRouter } = require("./user");
const { TodosRouter } = require("./todos");

const AppRouter = Router();

AppRouter.use("/auth", AuthRouter);
AppRouter.use("/user", UserRouter);
AppRouter.use("/todos", TodosRouter);

const express = require("express");
const router = express.Router();

// Binden Sie die Members-Routen ein
const MembersRouter = require("./members");
router.use("/members", MembersRouter);

module.exports = router;

module.exports = { AppRouter };
