import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Auth } from '../../src/auth/auth.schema';
import { JsonWebTokenError } from '../errors.core';

declare global {
  interface JwtPayload {
    email: string;
    userId: string;
  }

  namespace Express {
    interface Request {
      currentUser?: any;
    }
  }
}

export const currentUser =
  (jwt_key: any) => async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
      return next(new JsonWebTokenError('Invalid Token'));
    }

    const [_, token] = req.headers.authorization.split('Bearer ');

    try {
      const payload = jwt.verify(token, jwt_key!) as JwtPayload;

      const user = await Auth.findOne({ _id: payload.userId });

      req.currentUser = user;
      if (!user) {
        return next(new JsonWebTokenError('User not found'));
      }
      const tokenAvailable = await user.checkToken(token);

      if (!tokenAvailable) {
        return next(new JsonWebTokenError('Invalid Token'));
      }

      next();
    } catch (err) {
      return next(new JsonWebTokenError('Invalid Token'));
    }
  };
