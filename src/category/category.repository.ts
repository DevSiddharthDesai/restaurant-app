import mongoose from 'mongoose';
import { Category, ICategory } from './category.schema';
import { ValidationError } from '../../core';

class CategoryRepository {
  private model: mongoose.Model<ICategory>;

  constructor() {
    this.model = Category;
  }

  async create(category: ICategory): Promise<ICategory> {
    const categoryAvailable = await this.model.findOne({
      name: category.name,
    });

    if (categoryAvailable) {
      throw new ValidationError('Category Already Exists');
    }

    const categoryInstance = new this.model(category);

    const validationError = categoryInstance.validateSync();

    if (validationError) {
      throw new ValidationError(validationError.message);
    }

    // Validate input
    const errors = await this.model.validate(category);

    if (errors != null) {
      throw new ValidationError(errors);
    }

    const newCategory = await this.model.create(category);
    return newCategory;
  }

  async getSingle(categoryId: string): Promise<ICategory> {
    try {
      const category = await this.model.findById(categoryId).exec();

      if (!category) {
        throw new ValidationError('Category not found');
      }

      return category;
    } catch (error) {
      throw new ValidationError('something went wrong!');
    }
  }

  async getAll(): Promise<any[]> {
    try {
      const categories = await this.model.find().exec();

      const categoriesWithUrls = categories.map(category => {
        return {
          name: category.name,
          description: category.description,
          imageUrl: `http://localhost:4000/assets/images/${category.imageUrl}`, // Replace YourPort with your server port and path to images
        };
      });

      if (!categoriesWithUrls) {
        throw new ValidationError('No Category Available');
      }

      return categoriesWithUrls;
    } catch (error) {
      throw new ValidationError('something went wrong!');
    }
  }
}

export default CategoryRepository;
