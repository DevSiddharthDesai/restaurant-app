import axios from 'axios';
import { BASE_URL } from '../config/serverApiConfig';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { headers } from '../../src/api/api';
import { AppDispatch } from './store';

interface Category {
  name: string;
  description: string;
}

interface CategoriesState {
  categories: Category[];
  category: Category | null;
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  category: null,
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setAllCategories: (state, action: PayloadAction<Category[]>) => {
      const { payload } = action;
      state.categories = payload;
    },
  },
});

export const { setAllCategories } = categorySlice.actions;

export const fetchAllRestaurants = () => async (dispatch: AppDispatch) => {
  try {
    const result = await axios.get(`${BASE_URL}/api/restaurants`, {
      headers,
    });

    dispatch(setAllCategories(result.data));
  } catch (error) {
    return error;
  }
};
