import { Injectable } from '@angular/core';
import { Restaurant} from '../Models/Restaurant';
import { Cordinates } from '../Models/Cordinates';
import { HttpClient } from '@angular/common/http';
import { Observable , of , BehaviorSubject , Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http : HttpClient) { }

  getRestaurants(){
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurants"); 
  }

  getRestaurantLocation(){
    return this.http.get<Cordinates[]>("http://localhost:3000/restaurant-locations");
  }

  getRestaurantsFilterByCostInc(){
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurants/api/filter/average-cost-for-two-inc");  
  }

  getRestaurantsFilterByCostDsc(){
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurants/api/filter/average-cost-for-two-dsc");  
  }

  getRestaurantsFilterByVotesInc(){
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurants/api/filter/votes-inc");  
  }

  getRestaurantsFilterByVotesDsc(){
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurants/api/filter/votes-dsc");  
  }

  getRestaurantsFilterByRatingsInc(){
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurants/api/filter/ratings-inc");  
  }

  getRestaurantsFilterByRatingsDsc(){
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurants/api/filter/ratings-dsc");  
  }

  getRestaurantCordinates( restaurant : Restaurant){
    let id:Number= restaurant.restaurantID;
    return this.http.get<Cordinates[]>("http://localhost:3000/restaurant-locations/"+id);
  }

  getRestaurant(name : String){
    return this.http.get<Restaurant>("http://localhost:3000/restaurants/api/"+name);
  }

}
