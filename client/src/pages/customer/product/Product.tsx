import React, { useEffect } from 'react';
import { RootState } from '../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Restaurant,
  fetchRestaurantMenu,
} from '../../../store/restaurant.slice';
import ProductBanner from '../../../components/molecules/productbanner/ProductBanner';
import { RestaurantIntro } from '../../../components/organisms/restaurantIntro/RestaurantIntro';
import { I1 } from '../../../utils/images';
import RestaurantDetails from '../../../components/organisms/restaurantDetails/RestaurantDetails';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const restaurant = useSelector(
    (state: RootState) => state.restaurant.restaurant as Restaurant,
  );

  console.log(restaurant);

  useEffect(() => {
    // Dispatch the action to fetch all restaurants when the component mounts
    dispatch(fetchRestaurantMenu(id) as any);
  }, [dispatch, id]);

  return (
    <>
      <ProductBanner image={I1} />
      {restaurant ? (
        <>
          <div className='container max-w-screen-xl mx-auto'>
            <RestaurantIntro
              name={restaurant.name}
              premiumProdutPicture={restaurant.premiumProdutPicture}
              address={restaurant.address}
            />
          </div>
          <div className='bg-gray p-5'>
            <div className='container max-w-screen-xl mx-auto'>
              <div className='grid grid-cols-[80%_20%]'>
                <RestaurantDetails />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>No such product available</div>
      )}
    </>
  );
};

export default Product;
