import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IMenu extends Document {
  name: string;
  description: string;
  price: Number;
  availability: boolean;
  images: mongoose.Types.Array<string> | undefined;
  rating: Number | undefined;
  restaurantId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Create the Mongoose schema
const MenuSchema: Schema<IMenu> = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

export const Menu: Model<IMenu> = mongoose.model<IMenu>('Menu', MenuSchema);
