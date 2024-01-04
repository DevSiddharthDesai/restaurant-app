import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { menu } from './restaurant.slice';
import { AppDispatch } from './store';
import axios from 'axios';
import { headers } from '../api/api';
import { BASE_URL } from '../config/serverApiConfig';

export interface Cart {
  _id: string;
  availability: boolean;
  categoryId: string;
  description: string;
  images: [];
  name: string;
  price: string;
  restauranId: string;
  quantity: number;
}

interface CartState {
  cartItems: menu[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<menu[]>) => {
      const { payload } = action;
      state.cartItems = payload;
    },
    removeItemFromCart: (state, action: PayloadAction<menu[]>) => {},
  },
});

const { addItemToCart, removeItemFromCart } = cartSlice.actions;

const addCartItem = (
  cartItems: menu[],
  currentItem: menu,
  quantity: number,
) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem._id === currentItem._id,
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem._id === currentItem._id ? { ...cartItem, quantity } : cartItem,
    );
  }

  return [...cartItems, { ...currentItem, quantity }];
};

export const addToCart =
  (cartItems: menu[], menuId: string, quantity: number) =>
  async (dispatch: AppDispatch) => {
    try {
      const result = await axios.get(`${BASE_URL}/api/menus/${menuId}`, {
        headers,
      });
      const newItems = addCartItem(cartItems, result.data, quantity);
      dispatch(addItemToCart(newItems));
    } catch (error) {}
  };

export default cartSlice.reducer;
