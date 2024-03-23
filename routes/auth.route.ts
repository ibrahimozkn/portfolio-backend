import { Router } from "express";
import { login } from "../controllers/auth.controller";
const router: Router = Router();

router.post("/auth/login", login);

export default router;
