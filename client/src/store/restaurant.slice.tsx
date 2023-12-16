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

export interface Restaurant {
  name: string;
  description: string;
  address: Address;
  contact: Contact;
  openingHours: OpeningHours[];
  profilePicture: string;
  restaurantOwnerId: string;
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
  },
});

export const { setAllRestaurants } = restaurantSlice.actions;

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

export default restaurantSlice.reducer;
