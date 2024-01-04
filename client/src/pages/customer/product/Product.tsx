import React, { useEffect } from 'react';
import { RootState } from '../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Restaurant,
  fetchRestaurantMenu,
  fetchRestaurantMenuBasedOnCategory,
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

  const menus = useSelector((state: RootState) => state.restaurant.menu);

  useEffect(() => {
    dispatch(fetchRestaurantMenu(id) as any);
  }, [dispatch]);

  useEffect(() => {
    if (id && restaurant?.categories?.length > 0) {
      dispatch(
        fetchRestaurantMenuBasedOnCategory(
          id,
          restaurant.categories[0]?._id,
        ) as any,
      );
    }
  }, [restaurant]);

  const handleCategoryClick = (categoryId: string) => {
    if (id && categoryId) {
      dispatch(fetchRestaurantMenuBasedOnCategory(id, categoryId) as any);
    }
  };

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
                <RestaurantDetails
                  categories={restaurant.categories}
                  onCategoryClick={handleCategoryClick}
                  menus={menus}
                />
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
