import MenuRepository from './menu.repository';
import { IMenu } from './menu.schema';

class MenuService {
  private readonly menuRepo: MenuRepository;

  constructor() {
    this.menuRepo = new MenuRepository();
  }

  async create(menu: IMenu): Promise<IMenu> {
    return this.menuRepo.create(menu);
  }

  async getSingle(menuId: string): Promise<IMenu> {
    return this.menuRepo.getSingle(menuId);
  }

  async getAll(): Promise<IMenu[]> {
    return this.menuRepo.getAll();
  }
}

export const menuService = new MenuService();
