import { Router } from "express";
import { create, remove, show, update } from "../controllers/post.controller";
import { verifyTokenMiddleware } from "../controllers/auth.controller";

const router: Router = Router();

router.post("/post", verifyTokenMiddleware, create);
router.get("/posts", show);
router.delete("/post/:id", verifyTokenMiddleware, remove);
router.put("/post/:id", verifyTokenMiddleware, update);
export default router;
