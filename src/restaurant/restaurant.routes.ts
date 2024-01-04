import { currentUser } from '../../core/middlewares/current-user';
import { checkUserType } from '../../core/middlewares/require-auth';
import RestaurantController from './restaurant.controller';
import { Router } from 'express';

const router = Router();

const restaurantCtrl = new RestaurantController();

router
  .route('/')
  .post(
    currentUser(process.env.JWT_SECRET!),
    checkUserType(['restaurant_owner']),
    restaurantCtrl.createRestaurant,
  );
router.route('/').get(restaurantCtrl.getRestaurants);
router.route('/:id').get(restaurantCtrl.getRestaurant);
router.route('/getMenus/:restaurantId').get(restaurantCtrl.getRestaurantMenus);
router
  .route('/getMenus/:restaurantId/:categoryId')
  .get(restaurantCtrl.getRestaurantMenusOnCategoryBased);

export { router as RestaurantRouter };
