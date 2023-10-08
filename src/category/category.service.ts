import CategoryRepository from './category.repository';
import { ICategory } from './category.schema';

class CategoryService {
  private readonly categoryRepo: CategoryRepository;

  constructor() {
    this.categoryRepo = new CategoryRepository();
  }

  async create(category: ICategory): Promise<ICategory> {
    return this.categoryRepo.create(category);
  }

  async getSingle(categoryId: string): Promise<ICategory> {
    return this.categoryRepo.getSingle(categoryId);
  }

  async getAll(): Promise<ICategory[]> {
    return this.categoryRepo.getAll();
  }

}

export const categoryService = new CategoryService();
