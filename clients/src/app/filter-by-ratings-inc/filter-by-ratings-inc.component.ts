import { Component, OnInit } from '@angular/core';
import { Restaurant} from '../../../Models/Restaurant';
import { DataService} from '../../../Services/data.service';

@Component({
  selector: 'app-filter-by-ratings-inc',
  templateUrl: './filter-by-ratings-inc.component.html',
  styleUrls: ['./filter-by-ratings-inc.component.css']
})
export class FilterByRatingsIncComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRestaurantsFilterByRatingsInc().subscribe( data => this.restaurants=data);
  }

}
