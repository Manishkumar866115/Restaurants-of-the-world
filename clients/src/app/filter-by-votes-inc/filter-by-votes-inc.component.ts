import { Component, OnInit } from '@angular/core';
import { Restaurant} from '../../../Models/Restaurant';
import { DataService} from '../../../Services/data.service';

@Component({
  selector: 'app-filter-by-votes-inc',
  templateUrl: './filter-by-votes-inc.component.html',
  styleUrls: ['./filter-by-votes-inc.component.css']
})
export class FilterByVotesIncComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRestaurantsFilterByRatingsInc().subscribe( data => this.restaurants=data);
  }

}
