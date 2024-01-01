import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { menu } from './restaurant.slice';
import { AppDispatch } from './store';

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
    addItemToCart: (state, action: PayloadAction<menu[]>) => {},
    removeItemFromCart: (state, action: PayloadAction<menu[]>) => {},
  },
});

export const addToCart =
  (menudId: string, quantity: number) => async (dispatch: AppDispatch) => {
    console.log(menudId);
    console.log(quantity);
  };
