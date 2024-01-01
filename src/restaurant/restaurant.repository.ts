import mongoose from 'mongoose';
import { Restaurant, IRestaurant } from './restaurant.schema';
import { Menu, IMenu } from '../menu/menu.schema';
import { MultipleValidationErrors, ValidationError } from '../../core';
import { Category, ICategory } from '../category/category.schema';

class RestaurantRepository {
  private Restaurantmodel: mongoose.Model<IRestaurant>;
  private Menumodel: mongoose.Model<IMenu>;
  private CategoryModel: mongoose.Model<ICategory>;

  constructor() {
    this.Restaurantmodel = Restaurant;
    this.Menumodel = Menu;
    this.CategoryModel = Category;
  }

  async create(restaurant: IRestaurant): Promise<IRestaurant> {
    const restaurantAvailable = await this.Restaurantmodel.findOne({
      name: restaurant.name,
    });

    if (restaurantAvailable) {
      throw new ValidationError('Restaurant Already Exists');
    }

    const restaurantInstance = new this.Restaurantmodel(restaurant);

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
    const errors = await this.Restaurantmodel.validate(restaurant);

    if (errors != null) {
      throw new ValidationError(errors);
    }

    const newRestaurant = await this.Restaurantmodel.create(restaurant);

    return newRestaurant;
  }

  async getSingle(RestaurantId: string): Promise<IRestaurant> {
    try {
      const restaurant =
        await this.Restaurantmodel.findById(RestaurantId).exec();

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
      const categories = await this.Restaurantmodel.find().exec();

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
      const restaurant =
        await this.Restaurantmodel.findById(RestaurantId).exec();

      if (!restaurant) {
        throw new ValidationError('No Category Available');
      }

      const menuIds = restaurant.menu;

      const menus = await Menu.find({ _id: { $in: menuIds } }).exec();

      const categoryIds = menus.map(element => element.categoryId.toString());

      const uniqueCategoryIds = [...new Set(categoryIds)];

      const categories = await this.CategoryModel.find({
        _id: { $in: uniqueCategoryIds },
      }).exec();

      const restaurantWithFilteredMenus = {
        ...restaurant.toObject(),
        menus: menus,
        categories: categories,
      };

      return restaurantWithFilteredMenus;
    } catch (error) {
      throw new ValidationError('something went wrong!');
    }
  }

  async getRestaurantMenusBasedOnCategory(
    RestaurantId: string,
    categoryId: string,
  ): Promise<any> {
    try {
      const menus = await Menu.find({
        categoryId: categoryId,
        restaurantId: RestaurantId,
      }).exec();

      if (!menus) {
        throw new ValidationError('No Menu Available');
      }

      return menus;
    } catch (error) {
      throw new ValidationError('something went wrong!');
    }
  }
}

export default RestaurantRepository;
