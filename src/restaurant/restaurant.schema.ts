import mongoose, { Document, Schema, Model } from 'mongoose';
import { Address, Contact } from './restaurant.types';

export interface IRestaurant extends Document {
  name: string;
  description: string;
  address: Address;
  contact: Contact;
  premiumProdutPicture: string;
  restaurantLogo: string;
  openingHours: Array<{
    dayOfWeek: string;
    openingHours: string;
    closingHours: string;
  }>;
  rating: Array<{ average: number; count: number }>;
  restaurantOwnerId: mongoose.Types.ObjectId | undefined;
  menu: Array<mongoose.Types.ObjectId> | [];
  createdAt: Date;
  updatedAt: Date;
}

const openingHoursSchema = new Schema({
  dayOfWeek: {
    type: String,
    required: true,
  },
  openingHours: {
    type: String,
    required: true,
  },
  closingHours: {
    type: String,
    required: true,
  },
});

const ratingSchema = new Schema({
  average: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const RestaurantSchema: Schema<IRestaurant> = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  contact: {
    type: Object,
    required: true,
  },
  openingHours: {
    type: [openingHoursSchema],
    validate: {
      validator: function (value: any[]) {
        // Custom validation logic to check for empty array
        return value.length > 0;
      },
      message: 'Opening hours must not be empty.',
    },
  },
  rating: {
    type: [ratingSchema],
    // validate: {
    //   validator: function (value: any[]) {
    //     // Custom validation logic to check for empty array
    //     return value.length > 0;
    //   },
    //   message: 'Rating must not be empty.',
    // },
  },
  premiumProdutPicture: {
    type: String,
    required: true,
  },
  restaurantLogo: {
    type: String,
    required: true,
  },
  restaurantOwnerId: {
    type: Schema.Types.ObjectId,
  },
  menu: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

function addRating(restaurant: IRestaurant, newRating: number): void {
  const firstRating = restaurant.rating[0];

  if (firstRating) {
    const currentAverage = firstRating.average;
    const currentCount = firstRating.count;

    // Calculate the new average
    const newAverage =
      (currentAverage * currentCount + newRating) / (currentCount + 1);

    // Update the restaurant's rating
    firstRating.average = newAverage;
    firstRating.count += 1;
  }
}

export const Restaurant: Model<IRestaurant> = mongoose.model<IRestaurant>(
  'Restaurant',
  RestaurantSchema,
);
