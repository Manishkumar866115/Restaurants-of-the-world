import { Component, OnInit } from '@angular/core';
import { Restaurant} from '../../../Models/Restaurant';
import { DataService} from '../../../Services/data.service';
import { Observable ,of } from 'rxjs';

@Component({
  selector: 'app-restaurant-container',
  templateUrl: './restaurant-container.component.html',
  styleUrls: ['./restaurant-container.component.css']
})
export class RestaurantContainerComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRestaurants().subscribe( data => this.restaurants=data);
  }

}
