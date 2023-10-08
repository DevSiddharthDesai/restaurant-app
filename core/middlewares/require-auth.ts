import {NextFunction, Request, Response } from 'express';

export const checkUserType = (userTypeInput: string[]) => {

    return (req: Request, res: Response, next:NextFunction) => {

      const user = req.currentUser;
  
      if (user && userTypeInput.includes(user.userType)) {
        next();
      } else {
        res.status(403).json({ message: 'Access denied' });
      }
    };
  }