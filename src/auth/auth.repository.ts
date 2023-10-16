import mongoose from 'mongoose';
import { Auth, IAuth, IUser } from './auth.schema';
import { AuthFailureError, ValidationError } from '../../core';
import { authenticationService } from '../../core/services/authentication';

class AuthRepository {
  private model: mongoose.Model<IAuth>;

  constructor() {
    this.model = Auth;
  }

  async create(user: IAuth): Promise<IAuth> {
    // Validate input
    const errors = await this.model.validate(user);

    if (errors != null) {
      throw new ValidationError(errors);
    }

    const newUser = await this.model.create(user);
    return newUser;
  }

  async signInByEmail(user: IAuth): Promise<string> {
    const errors = await this.model.validate(user);

    if (errors != null) {
      throw new ValidationError(errors);
    }

    const fetchedUser = await this.model.findOne({ email: user.email });

    if (fetchedUser) {
      const isEqual = await authenticationService.pwdCompare(
        fetchedUser.password,
        user.password,
      );

      if (!isEqual) throw new AuthFailureError('Wrong Credentials');

      const token = await fetchedUser.generateAuthToken();

      return token;
    } else {
      throw new AuthFailureError('No Such User Exists!');
    }
  }

  async signOutByToken(user: IUser, token: String): Promise<any> {
    const LoggedInUser = await this.model.findOne({ email: user.email });

    if (LoggedInUser) {
      const deletedToken = await this.model.updateMany(
        { 'tokens.token': token },
        { $pull: { tokens: { token: token } } },
      );
      if (deletedToken.modifiedCount) {
        return deletedToken;
      } else {
        throw new AuthFailureError('Token not available');
      }
    }
  }
}

export default AuthRepository;
