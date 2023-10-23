import { combineReducers } from 'redux';
import { restaurantReducer } from './Restaurant/restaurant.reducers';

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
