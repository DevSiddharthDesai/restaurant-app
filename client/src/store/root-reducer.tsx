import { combineReducers } from 'redux';
import restaurantSlice from './restaurant.slice';
import categoriesSlice from './categories.slice';
import menuSlice from './menu.slice';
import cartSlice from './cart.slice';

const rootReducer = combineReducers({
  restaurant: restaurantSlice,
  categories: categoriesSlice,
  menus: menuSlice,
  cart: cartSlice,
});

export default rootReducer;
