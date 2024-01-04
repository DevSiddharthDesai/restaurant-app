import { Request, Response, NextFunction } from 'express';
import { restaurantService } from './restaurant.service';
import { IRestaurant } from './restaurant.schema';

class RestaurantController {
  async createRestaurant(req: Request, res: Response, next: NextFunction) {
    try {
      const restaurant: IRestaurant = req.body;
      const newRestaurant = await restaurantService.create(restaurant);
      if (newRestaurant) {
        res.status(201).send('Restaurant Created Successfully');
      }
    } catch (e) {
      next(e);
    }
  }

  async getRestaurant(req: Request, res: Response, next: NextFunction) {
    try {
      const restaurantId = req.params.id;
      const Restaurant = await restaurantService.getSingle(restaurantId);
      res.status(201).send(Restaurant);
    } catch (e) {
      res.status(400).send('Restaurant is not available');
    }
  }

  async getRestaurants(req: Request, res: Response, next: NextFunction) {
    const Restaurants = await restaurantService.getAll();
    if (!Restaurants) {
      res.status(400).send('No Restaurant Available');
    }
    res.status(201).send(Restaurants);
  }

  async getRestaurantMenus(req: Request, res: Response, next: NextFunction) {
    const restaurantId = req.params.restaurantId;
    const RestaurantMenus =
      await restaurantService.getRestaurantMenus(restaurantId);
    if (!RestaurantMenus) {
      res.status(400).send('No Restaurant Available');
    }
    res.status(200).send(RestaurantMenus);
  }

  async getRestaurantMenusOnCategoryBased(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const categoryId = req.params.categoryId;
    const restaurantId = req.params.restaurantId;
    const RestaurantMenus =
      await restaurantService.getRestaurantMenusBasedOnCategory(
        restaurantId,
        categoryId,
      );
    if (!RestaurantMenus) {
      res.status(400).send('No Restaurant Available');
    }
    res.status(200).send(RestaurantMenus);
  }
}

export default RestaurantController;
