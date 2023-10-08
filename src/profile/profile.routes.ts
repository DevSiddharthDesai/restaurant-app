import { Router } from "express";
import ProfileController from "./profile.controller";
import { currentUser } from '../../core/middlewares/current-user';
import { checkUserType } from "../../core/middlewares/require-auth";

const router = Router();

const profileCtrl = new ProfileController();

router.route('/editprofile').get(currentUser(process.env.JWT_SECRET!), checkUserType(['customer']), profileCtrl.edit);

export {router as ProfileRouter};