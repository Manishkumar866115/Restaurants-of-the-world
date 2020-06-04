import { Component, OnInit } from '@angular/core';
import { Restaurant} from 'Models/Restaurant';
import { Router, ActivatedRoute , ParamMap} from '@angular/router';
import { DataService } from 'Services/data.service';

@Component({
  selector: 'app-restaurant-extension',
  templateUrl: './restaurant-extension.component.html',
  styleUrls: ['./restaurant-extension.component.css']
})
export class RestaurantExtensionComponent implements OnInit {
  restaurant : Restaurant;
  id : String;
  constructor(private router: Router, private dataService : DataService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap)=>{
      this.id=params.get('id');
      this.dataService.getRestaurant(this.id).subscribe( data=> {
        this.restaurant=data;
      });
    })
  }

}
