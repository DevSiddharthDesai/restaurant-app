import { Request, Response, NextFunction } from 'express';

class ProfileController {

  async edit(req: Request, res: Response, next: NextFunction){
    try{

      res.status(200).send("Can edit profile");

    }catch(e){
      res.status(400).send("" + e);
    }
  }
}

export default ProfileController;