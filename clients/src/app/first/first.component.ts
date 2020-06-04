import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from 'Services/data.service';
import { Restaurant } from 'Models/Restaurant';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  id: String;
  restaurant : Restaurant;
  constructor(private router: Router , private dataService: DataService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.dataService.getRestaurant(this.id).subscribe( data=> {
      this.router.navigate(['/restaurant',this.id]);
    });
  }
}
