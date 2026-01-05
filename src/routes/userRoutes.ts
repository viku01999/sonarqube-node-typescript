import { Router } from "express";
import { addUsersController, getAllUserController } from "../controllers/userController";

const router = Router();


router.get("/users", getAllUserController);
router.post("/user", addUsersController)

export default router;