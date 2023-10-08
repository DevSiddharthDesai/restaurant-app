import { Request, Response, NextFunction } from 'express';
import { categoryService } from './category.service';
import { ICategory } from './category.schema';

class CategoryController {
  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category: ICategory = req.body;
      const newCategory = await categoryService.create(category);
      if (newCategory) {
        res.status(201).send('Category Created Successfully');
      }
    } catch (e) {
      next(e);
    }
  }

  async getCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const categoryId = req.params.id;
      const Category = await categoryService.getSingle(categoryId);
      res.status(201).send(Category);
    } catch (e) {
      res.status(400).send('Category is not available');
    }
  }

  async getCategories(req: Request, res: Response, next: NextFunction) {
    const Categories = await categoryService.getAll();
    if (!Categories) {
      res.status(400).send('No Category Available');
    }
    res.status(201).send(Categories);
  }
}

export default CategoryController;
