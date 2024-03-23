import { Router } from "express";
import { create, show } from "../controllers/post.controller";
import { verifyTokenMiddleware } from "../controllers/auth.controller";

const router: Router = Router();

router.post("/post", verifyTokenMiddleware, create);
router.get("/posts", show);

export default router;
