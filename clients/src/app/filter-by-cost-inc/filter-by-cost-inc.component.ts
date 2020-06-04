import { Component, OnInit } from '@angular/core';
import { Restaurant} from '../../../Models/Restaurant';
import { DataService} from '../../../Services/data.service';

@Component({
  selector: 'app-filter-by-cost-inc',
  templateUrl: './filter-by-cost-inc.component.html',
  styleUrls: ['./filter-by-cost-inc.component.css']
})
export class FilterByCostIncComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRestaurantsFilterByCostInc().subscribe( data => this.restaurants=data);
  }

}
