import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../../Models/Restaurant';
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  state: Boolean;
  @Input() restaurant: Restaurant;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.state=false;
  }
  
  onClick(){
    this.state= !this.state;
    this.router.navigate(['/restaurant',this.restaurant.restaurantName] ,{state :{ data : this.restaurant}});
  }
}
