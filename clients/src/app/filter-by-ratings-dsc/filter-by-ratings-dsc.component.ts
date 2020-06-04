import { Component, OnInit } from '@angular/core';
import { Restaurant} from '../../../Models/Restaurant';
import { DataService} from '../../../Services/data.service';

@Component({
  selector: 'app-filter-by-ratings-dsc',
  templateUrl: './filter-by-ratings-dsc.component.html',
  styleUrls: ['./filter-by-ratings-dsc.component.css']
})
export class FilterByRatingsDscComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRestaurantsFilterByRatingsDsc().subscribe( data => this.restaurants=data);
  }

}
