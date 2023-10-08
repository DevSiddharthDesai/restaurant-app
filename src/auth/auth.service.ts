import AuthRepository from './auth.repository';
import { IAuth, IUser } from './auth.schema';
import jwt from 'jsonwebtoken';

class AuthService {
  private readonly authRepo: AuthRepository;

  constructor() {
    this.authRepo = new AuthRepository();
  }

  async create(user: IAuth): Promise<IAuth> {
    return this.authRepo.create(user);
  }

  async signIn(user: IAuth) {
    return this.authRepo.signInByEmail(user);
  }

  async signOut(user:IUser, jwt_token: String) {
    return this.authRepo.signOutByToken(user, jwt_token);
  }

}

export const authService = new AuthService();
