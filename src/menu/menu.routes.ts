import { currentUser } from '../../core/middlewares/current-user';
import { checkUserType } from '../../core/middlewares/require-auth';
import MenuController from './menu.controller';
import { Router } from 'express';

const router = Router();

const menuCtrl = new MenuController();

router
  .route('/')
  .post(
    currentUser(process.env.JWT_SECRET!),
    checkUserType(['restaurant_owner']),
    menuCtrl.createMenu,
  );
router.route('/').get(menuCtrl.getMenus);
router.route('/:id').get(menuCtrl.getMenu);

export { router as MenuRouter };
