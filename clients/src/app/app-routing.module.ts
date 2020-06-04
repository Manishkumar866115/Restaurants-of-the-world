import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RestaurantExtensionComponent } from './restaurant-extension/restaurant-extension.component';
import { FilterByCostIncComponent } from './filter-by-cost-inc/filter-by-cost-inc.component';
import { FilterByCostDscComponent } from './filter-by-cost-dsc/filter-by-cost-dsc.component';
import { FilterByRatingsDscComponent } from './filter-by-ratings-dsc/filter-by-ratings-dsc.component';
import { FilterByRatingsIncComponent } from './filter-by-ratings-inc/filter-by-ratings-inc.component';
import { FilterByVotesDscComponent } from './filter-by-votes-dsc/filter-by-votes-dsc.component';
import { FilterByVotesIncComponent } from './filter-by-votes-inc/filter-by-votes-inc.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantContainerComponent } from './restaurant-container/restaurant-container.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

const routes: Routes = [
  { path : '' , component : RestaurantContainerComponent},
  { path :'restaurant/:id' , component : RestaurantExtensionComponent},
  { path : 'restaurant/api/filter/average-cost-for-two-inc' , component : FilterByCostIncComponent},
  { path : 'restaurant/api/filter/average-cost-for-two-dsc' , component : FilterByCostDscComponent},
  { path : 'restaurant/api/filter/votes-inc' , component : FilterByVotesIncComponent},
  { path : 'restaurant/api/filter/votes-dsc' , component : FilterByVotesDscComponent},
  { path : 'restaurant/api/filter/ratings-inc' , component : FilterByRatingsIncComponent},
  { path : 'restaurant/api/filter/ratings-dsc' , component : FilterByRatingsDscComponent},
  { path : '**' , component: NotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
