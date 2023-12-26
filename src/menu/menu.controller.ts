import { Request, Response, NextFunction } from 'express';
import { menuService } from './menu.service';
import { IMenu } from './menu.schema';

class MenuController {
  async createMenu(req: Request, res: Response, next: NextFunction) {
    try {
      const menu: IMenu = req.body;
      const newMenu = await menuService.create(menu);
      if (newMenu) {
        res.status(201).send('Menu Created Successfully');
      }
    } catch (e) {
      next(e);
    }
  }

  async getMenu(req: Request, res: Response, next: NextFunction) {
    try {
      const menuId = req.params.id;
      const Menu = await menuService.getSingle(menuId);
      res.status(201).send(Menu);
    } catch (e) {
      res.status(400).send('Menu is not available');
    }
  }

  async getMenus(req: Request, res: Response, next: NextFunction) {
    const menus = await menuService.getAll();
    if (!menus) {
      res.status(400).send('No Menus Available');
    }
    res.status(201).send(menus);
  }
}

export default MenuController;
