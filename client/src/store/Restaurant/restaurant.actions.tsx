import axios from 'axios';
import { headers } from '../../api/api';
import { restaurantConstants } from './restaurant.constants';
import { BASE_URL } from '../../config/serverApiConfig';
import { Dispatch } from 'redux';

export const readRestaurantRequest = () => ({
  type: restaurantConstants.READ_RESTAURANT_REQUEST,
});

export const readRestaurantSuccess = (restaurants: any[]) => ({
  type: restaurantConstants.READ_RESTAURANT_SUCCESS,
  payload: restaurants,
});

export const readRestaurantFailure = error => ({
  type: restaurantConstants.READ_RESTAURANT_FAILURE,
  payload: error,
});

export const fetchRestaurants = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(readRestaurantRequest());

      const result = await axios.get(`${BASE_URL}/api/restaurants`, {
        headers,
      });
      dispatch(readRestaurantSuccess(result.data));
    } catch (error) {
      dispatch(readRestaurantFailure(error));
    }
  };
};
