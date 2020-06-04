import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { NavComponent } from './nav/nav.component';
import { RestaurantContainerComponent } from './restaurant-container/restaurant-container.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { RestaurantExtensionComponent } from './restaurant-extension/restaurant-extension.component';
import { FilterByCostIncComponent } from './filter-by-cost-inc/filter-by-cost-inc.component';
import { FilterByCostDscComponent } from './filter-by-cost-dsc/filter-by-cost-dsc.component';
import { FilterByVotesIncComponent } from './filter-by-votes-inc/filter-by-votes-inc.component';
import { FilterByVotesDscComponent } from './filter-by-votes-dsc/filter-by-votes-dsc.component';
import { FilterByRatingsIncComponent } from './filter-by-ratings-inc/filter-by-ratings-inc.component';
import { FilterByRatingsDscComponent } from './filter-by-ratings-dsc/filter-by-ratings-dsc.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantMapContainerComponent } from './restaurant-map-container/restaurant-map-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NavComponent,
    RestaurantContainerComponent,
    RestaurantComponent,
    MapContainerComponent,
    RestaurantExtensionComponent,
    FilterByCostIncComponent,
    FilterByCostDscComponent,
    FilterByVotesIncComponent,
    FilterByVotesDscComponent,
    FilterByRatingsIncComponent,
    FilterByRatingsDscComponent,
    NotFoundComponent,
    RestaurantDetailsComponent,
    RestaurantMapContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
