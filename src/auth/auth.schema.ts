import mongoose, { Document, Schema, Model } from 'mongoose';
import jwt from 'jsonwebtoken';
import { UserType } from './auth.types';
import { authenticationService } from '../../core/services/authentication';

export interface IAuth extends Document {
  userType: UserType;
  email: string;
  password: string;
  tokens: { token: string }[];
  generateAuthToken(): Promise<string>;
  checkToken(token: string): Promise<string>;
  removeToken(token: string): Promise<string>;
}

export interface IUser extends Document {
  userType: UserType;
  email: string;
}

// Create the Mongoose schema
const AuthSchema: Schema<IAuth> = new Schema({
  userType: {
    type: String,
    enum: Object.values(UserType),
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

AuthSchema.pre('save', async function (done) {
  if (this.isModified('password') || this.isNew) {
    const hashedPwd = await authenticationService.pwdToHash(
      this.get('password'),
    );
    this.set('password', hashedPwd);
  }
});

AuthSchema.methods.generateAuthToken = async function () {
  const auth = this;
  const token = jwt.sign(
    {
      email: auth.email,
      userId: auth._id,
    },
    process.env.JWT_SECRET!,
  );

  auth.tokens = auth.tokens.concat({ token });
  await auth.save();
  return token;
};

AuthSchema.methods.checkToken = async function (token: string) {
  const auth = this;
  return auth.tokens.some((obj: { token: string }) => obj.token === token);
};

export const Auth: Model<IAuth> = mongoose.model<IAuth>('User', AuthSchema);
