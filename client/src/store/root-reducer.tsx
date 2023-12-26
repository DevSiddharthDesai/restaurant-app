import { combineReducers } from 'redux';
import restaurantReducer from './restaurant.slice';
import categoriesSlice from './categories.slice';

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  categories: categoriesSlice,
});

export default rootReducer;
