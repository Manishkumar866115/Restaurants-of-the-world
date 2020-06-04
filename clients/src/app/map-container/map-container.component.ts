import { Component, OnInit } from '@angular/core';
import { Cordinates } from "Models/Cordinates";
import { DataService} from "../../../Services/data.service";
import * as L from "src/assets/leaflet/leaflet";
import { Observable ,of } from 'rxjs';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {
   cordinates : Cordinates[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const myMap = L.map('mapid').setView([0,0], 1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    
    this.dataService.getRestaurantLocation().subscribe(data => {
      this.cordinates=data;
      for(let co in this.cordinates){
        L.marker([ this.cordinates[co].latitude, this.cordinates[co].longitude]).addTo(myMap);
      }
    });
  }

}
