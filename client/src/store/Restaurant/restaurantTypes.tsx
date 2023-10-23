import { restaurantConstants } from './restaurant.constants';

export type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type Contact = {
  phone: string;
  email: string;
};

export type Restaurant = {
  _id: number;
  name: string;
  description: string;
  address: Address;
  contact: Contact;
  profilePicture: string;
  openingHours: Array<{
    dayOfWeek: string;
    openingHours: string;
    closingHours: string;
  }>;
  rating: Array<{ average: number; count: number }>;
  restaurantOwnerId: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface RestaurantState {
  restaurants: Restaurant[];
  restaurant: null;
  loading: boolean;
  error: string | null;
}

type CreateRestaurantPayload = {
  type: typeof restaurantConstants.CREATE_RESTAURANT;
  payload: Restaurant[];
};

type ReadRestaurantPayload = {
  type: typeof restaurantConstants.READ_RESTAURANT;
  payload: Restaurant[];
};

type ReadRestaurantFailurePayload = {
  type: typeof restaurantConstants.READ_RESTAURANT_FAILURE;
  payload: { error: string; details: any };
};

export type RestaurantActionTypes =
  | CreateRestaurantPayload
  | ReadRestaurantPayload
  | ReadRestaurantFailurePayload;
