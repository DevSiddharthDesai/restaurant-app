import axios from 'axios';
import { BASE_URL } from '../config/serverApiConfig';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { headers } from '../../src/api/api';
import { AppDispatch } from './store';

export interface Contact {
  phone: string;
  email: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface OpeningHours {
  dayOfWeek: string;
  openingHours: string;
  closingHours: string;
}

export interface menu {
  availability: boolean;
  categoryId: string;
  description: string;
  images: [];
  name: string;
  price: string;
  restauranId: string;
}

export interface Restaurant {
  name: string;
  description: string;
  address: Address;
  contact: Contact;
  openingHours: OpeningHours[];
  premiumProdutPicture: string;
  restaurantOwnerId: string;
  menus?: menu[];
}

interface RestaurantState {
  restaurants: Restaurant[];
  restaurant: Restaurant | null;
  loading: boolean;
  error: string | null;
}

const initialState: RestaurantState = {
  restaurants: [],
  restaurant: null,
  loading: false,
  error: null,
};

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setAllRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      const { payload } = action;
      state.restaurants = payload;
    },
    setSingleRestaurant: (state, action: PayloadAction<Restaurant>) => {
      const { payload } = action;
      state.restaurant = payload;
    },
  },
});

export const { setAllRestaurants, setSingleRestaurant } =
  restaurantSlice.actions;

export const fetchAllRestaurants = () => async (dispatch: AppDispatch) => {
  try {
    const result = await axios.get(`${BASE_URL}/api/restaurants`, {
      headers,
    });

    dispatch(setAllRestaurants(result.data));
  } catch (error) {
    return error;
  }
};

export const fetchRestaurantMenu =
  (id?: string) => async (dispatch: AppDispatch) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/api/restaurants/getMenus/${id}`,
        {
          headers,
        },
      );
      dispatch(setSingleRestaurant(result.data));
    } catch (error) {
      return error;
    }
  };

export default restaurantSlice.reducer;
