import mongoose from 'mongoose';
import { Restaurant, IRestaurant } from './restaurant.schema';
import { Menu, IMenu } from '../menu/menu.schema';
import { MultipleValidationErrors, ValidationError } from '../../core';

class RestaurantRepository {
  private model: mongoose.Model<IRestaurant>;
  private modelMenu: mongoose.Model<IMenu>;

  constructor() {
    this.model = Restaurant;
    this.modelMenu = Menu;
  }

  async create(restaurant: IRestaurant): Promise<IRestaurant> {
    const restaurantAvailable = await this.model.findOne({
      name: restaurant.name,
    });

    if (restaurantAvailable) {
      throw new ValidationError('Restaurant Already Exists');
    }

    const restaurantInstance = new this.model(restaurant);

    const validationError = restaurantInstance.validateSync();

    if (validationError?.errors) {
      const ValidationErrors = [];
      for (const key in validationError.errors) {
        if (validationError.errors.hasOwnProperty(key)) {
          ValidationErrors.push({
            field: key,
            message: validationError.errors[key].message,
          });
        }
      }
      throw new MultipleValidationErrors(ValidationErrors);
    }

    // Validate input
    const errors = await this.model.validate(restaurant);

    if (errors != null) {
      throw new ValidationError(errors);
    }

    const newRestaurant = await this.model.create(restaurant);

    return newRestaurant;
  }

  async getSingle(RestaurantId: string): Promise<IRestaurant> {
    try {
      const restaurant = await this.model.findById(RestaurantId).exec();

      if (!restaurant) {
        throw new ValidationError('Restaurant not found');
      }

      return restaurant;
    } catch (error) {
      throw new ValidationError('something went wrong!');
    }
  }

  async getAll(): Promise<IRestaurant[]> {
    try {
      const categories = await this.model.find().exec();

      if (!categories) {
        throw new ValidationError('No Category Available');
      }

      return categories;
    } catch (error) {
      throw new ValidationError('something went wrong!');
    }
  }

  async getRestaurantMenus(RestaurantId: string): Promise<any> {
    try {
      const restaurant = await this.model.findById(RestaurantId).exec();

      if (!restaurant) {
        throw new ValidationError('No Category Available');
      }

      const menuIds = restaurant.menu;

      const menus = await Menu.find({ _id: { $in: menuIds } }).exec();

      const restaurantWithFilteredMenus = {
        ...restaurant.toObject(),
        menus: menus,
      };

      return restaurantWithFilteredMenus;
    } catch (error) {
      throw new ValidationError('something went wrong!');
    }
  }
}

export default RestaurantRepository;
