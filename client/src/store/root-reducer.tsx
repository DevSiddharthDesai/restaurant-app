import { combineReducers } from 'redux';
import restaurantReducer from './restaurant.slice';

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
});

export default rootReducer;
