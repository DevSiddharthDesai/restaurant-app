import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description: string;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Create the Mongoose schema
const CategorySchema: Schema<ICategory> = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

export const Category: Model<ICategory> = mongoose.model<ICategory>(
  'Category',
  CategorySchema,
);
