import { Component, OnInit } from '@angular/core';
import { Restaurant} from '../../../Models/Restaurant';
import { DataService} from '../../../Services/data.service';

@Component({
  selector: 'app-filter-by-cost-dsc',
  templateUrl: './filter-by-cost-dsc.component.html',
  styleUrls: ['./filter-by-cost-dsc.component.css']
})
export class FilterByCostDscComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRestaurantsFilterByCostDsc().subscribe( data => this.restaurants=data);
  }

}
