import { Request, Response, NextFunction } from 'express';
import { authService } from './auth.service';
import { IAuth, IUser } from './auth.schema';
import { JsonWebTokenError } from '../../core/errors.core';

class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IAuth = req.body;
      const newUser = await authService.create(user);
      if (newUser) {
        res.status(201).send('User Created Successfully');
      }
    } catch (e) {
      next(e);
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IAuth = req.body;
      const result = await authService.signIn(user);

      if (result) {
        res.status(200).send('Logged In Successfully');
      }
    } catch (e) {
      next(e);
    }
  }

  async signOut(req: Request, res: Response, next: NextFunction) {
    const user: IUser = req.body;
    try {
      if (!req.headers.authorization) {
        return next(new JsonWebTokenError('Invalid Token'));
      }

      const [_, token] = req.headers.authorization.split('Bearer ');

      const result = await authService.signOut(user, token);

      if (result) {
        res.status(200).send('Logged Out Successfully');
      }
    } catch (e) {
      res.status(400).send('' + e);
    }
  }
}

export default AuthController;
