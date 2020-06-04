import { Component, OnInit , Input } from '@angular/core';
import { Cordinates } from "Models/Cordinates";
import { DataService} from "../../../Services/data.service";
import * as L from "src/assets/leaflet/leaflet";
import { Restaurant } from 'Models/Restaurant';
import { ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'app-restaurant-map-container',
  templateUrl: './restaurant-map-container.component.html',
  styleUrls: ['./restaurant-map-container.component.css']
})
export class RestaurantMapContainerComponent implements OnInit {
  @Input() restaurant : Restaurant;
  cordinates : Cordinates[];
  id : String;

  constructor(private dataService: DataService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    const restMap=L.map('mapid').setView([0,0],1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(restMap);

    this.route.paramMap.subscribe( (params: ParamMap)=>{
      this.id=params.get('id');
      this.dataService.getRestaurant(this.id).subscribe( data=> {
        this.restaurant=data;
        this.dataService.getRestaurantCordinates(this.restaurant).subscribe( data =>{
          this.cordinates=data;
          console.log(this.cordinates);
          L.marker( [this.cordinates[0].latitude , this.cordinates[0].longitude]).addTo(restMap);
          restMap.setView([this.cordinates[0].latitude , this.cordinates[0].longitude], 13);
        })
      });
    })

  }

}
