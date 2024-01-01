import axios from 'axios';
import { BASE_URL } from '../config/serverApiConfig';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { headers } from '../../src/api/api';
import { AppDispatch } from './store';

export interface Category {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
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

export const fetchAllCategories = () => async (dispatch: AppDispatch) => {
  try {
    const result = await axios.get(`${BASE_URL}/api/categories`, {
      headers,
    });

    dispatch(setAllCategories(result.data));
  } catch (error) {
    return error;
  }
};

export default categorySlice.reducer;
