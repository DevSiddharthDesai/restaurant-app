import { restaurantConstants } from './restaurant.constants';
import { RestaurantActionTypes, RestaurantState } from './restaurantTypes';

const initialState: RestaurantState = {
  restaurants: [],
  restaurant: null,
  loading: false,
  error: null,
};

export const restaurantReducer = (
  state = initialState,
  action: RestaurantActionTypes,
): RestaurantState => {
  switch (action.type) {
    case restaurantConstants.CREATE_RESTAURANT:
    case restaurantConstants.READ_RESTAURANT_REQUEST:
    case restaurantConstants.UPDATE_RESTAURANT_REQUEST:
    case restaurantConstants.DELETE_RESTAURANT_REQUEST:
      return { ...state, loading: true, error: null };

    case restaurantConstants.CREATE_RESTAURANT_SUCCESS:
    case restaurantConstants.READ_RESTAURANT_SUCCESS:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          restaurants: action.payload,
          loading: false,
          error: null,
        };
      } else {
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      }

    case restaurantConstants.CREATE_RESTAURANT_FAILURE:
    case restaurantConstants.READ_RESTAURANT_FAILURE:
    case restaurantConstants.UPDATE_RESTAURANT_FAILURE:
    case restaurantConstants.DELETE_RESTAURANT_FAILURE:
      return { ...state, loading: false, error: null };

    default:
      return state;
  }
};
