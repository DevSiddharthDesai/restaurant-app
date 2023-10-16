import RestaurantRepository from './restaurant.repository';
import { IRestaurant } from './restaurant.schema';

class RestaurantService {
  private readonly restaurantRepo: RestaurantRepository;

  constructor() {
    this.restaurantRepo = new RestaurantRepository();
  }

  async create(restaurant: IRestaurant): Promise<IRestaurant> {
    return this.restaurantRepo.create(restaurant);
  }

  async getSingle(restaurantId: string): Promise<IRestaurant> {
    return this.restaurantRepo.getSingle(restaurantId);
  }

  async getAll(): Promise<IRestaurant[]> {
    return this.restaurantRepo.getAll();
  }
}

export const restaurantService = new RestaurantService();
