import { currentUser } from '../../core/middlewares/current-user';
import { checkUserType } from '../../core/middlewares/require-auth';
import CategoryController from './category.controller';
import { Router } from 'express';

const router = Router();

const categoryCtrl = new CategoryController();

router
  .route('/')
  .post(
    currentUser(process.env.JWT_SECRET!),
    checkUserType(['restaurant_owner']),
    categoryCtrl.createCategory,
  );
router.route('/').get(categoryCtrl.getCategories);
router.route('/:id').get(categoryCtrl.getCategory);

export { router as CategoryRouter };
