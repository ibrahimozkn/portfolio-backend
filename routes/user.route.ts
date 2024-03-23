import { Router } from "express";
import { show, create, fetch, remove } from "../controllers/user.controller";
import { verifyTokenMiddleware } from "../controllers/auth.controller";
const router: Router = Router();

router.get("/users", verifyTokenMiddleware, show);
router.post("/user", create);
router.get("/user/:id", fetch);
router.post("/user/:id", remove);

export default router;
