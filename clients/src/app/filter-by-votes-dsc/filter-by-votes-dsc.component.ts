import { Component, OnInit } from '@angular/core';
import { Restaurant} from '../../../Models/Restaurant';
import { DataService} from '../../../Services/data.service';

@Component({
  selector: 'app-filter-by-votes-dsc',
  templateUrl: './filter-by-votes-dsc.component.html',
  styleUrls: ['./filter-by-votes-dsc.component.css']
})
export class FilterByVotesDscComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRestaurantsFilterByRatingsInc().subscribe( data => this.restaurants=data);
  }

}
