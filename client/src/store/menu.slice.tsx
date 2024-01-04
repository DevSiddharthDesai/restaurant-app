import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { headers } from '../../src/api/api';
import { AppDispatch } from './store';

import { menu } from './restaurant.slice';
import { BASE_URL } from '../config/serverApiConfig';

interface MenuState {
  menuItems: menu[];
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  menuItems: [],
  loading: false,
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenus: (state, action: PayloadAction<menu[]>) => {},
  },
});

export const { setMenus } = menuSlice.actions;

export const fetchMenuWithId =
  (menuId: string) => async (dispatch: AppDispatch) => {
    try {
      const result = await axios.get(`${BASE_URL}/api/menus/${menuId}`, {
        headers,
      });

      dispatch(setMenus(result.data));
    } catch (error) {
      return error;
    }
  };

export default menuSlice.reducer;
