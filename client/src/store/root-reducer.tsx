import { combineReducers } from 'redux';
import restaurantReducer from './restaurant.slice';
import categoriesSlice from './categories.slice';
import menuSlice from './menu.slice';

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  categories: categoriesSlice,
  menus: menuSlice,
});

export default rootReducer;
