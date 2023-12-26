import mongoose from 'mongoose';
import { Menu, IMenu } from './menu.schema';
import { ValidationError } from '../../core';

class MenuRepository {
  private model: mongoose.Model<IMenu>;

  constructor() {
    this.model = Menu;
  }

  async create(menu: IMenu): Promise<IMenu> {
    // Check menu item and resturant id as well so that for the same restaurant menu does repeat
    const menuAvailable = await this.model.findOne({
      name: menu.name,
    });

    if (menuAvailable) {
      throw new ValidationError('Menu Already Exists');
    }

    const menuInstance = new this.model(menu);

    const validationError = menuInstance.validateSync();

    if (validationError) {
      throw new ValidationError(validationError.message);
    }

    // Validate input
    const errors = await this.model.validate(menu);

    if (errors != null) {
      throw new ValidationError(errors);
    }

    const newCategory = await this.model.create(menu);
    return newCategory;
  }

  async getSingle(menuId: string): Promise<IMenu> {
    try {
      const menu = await this.model.findById(menuId).exec();

      if (!menu) {
        throw new ValidationError('Category not found');
      }

      return menu;
    } catch (error) {
      throw new ValidationError('something went wrong!');
    }
  }

  async getAll(): Promise<any[]> {
    try {
      const menus = await this.model.find().exec();

      if (!menus) {
        throw new ValidationError('No Category Available');
      }

      return menus;
    } catch (error) {
      throw new ValidationError('something went wrong!');
    }
  }
}

export default MenuRepository;
