import { Router } from "express";
import {
  show,
  create,
  fetch,
  remove,
  update,
} from "../controllers/user.controller";
import { verifyTokenMiddleware } from "../controllers/auth.controller";
const router: Router = Router();

router.get("/users", verifyTokenMiddleware, show);
router.post("/user", create);
router.get("/user/:id", verifyTokenMiddleware, fetch);
router.delete("/user/:id", verifyTokenMiddleware, remove);
router.put("/user/:id", verifyTokenMiddleware, update);

export default router;
