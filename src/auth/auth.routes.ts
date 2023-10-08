import AuthController from "./auth.controller";
import { Router } from "express";

const router = Router();

const authCtrl = new AuthController();

router.route('/signup').post(authCtrl.signUp);
router.route('/signin').post(authCtrl.signIn);
router.route('/signout').post(authCtrl.signOut);

export {router as AuthRouter};