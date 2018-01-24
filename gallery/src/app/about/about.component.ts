import { Component } from '@angular/core';

@Component({
  selector: 'epam-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  
  items =["About us", "Map", "Team", "More", "Lorem", "Ipsum", "Eagle", "Ernest"];
  current = 0;
  lat: number = 49.230;
  lng: number = 28.495;
  zoom: number = 10;

  constructor() { }

  ngOnInit() {
  }

  updateCurrent(number: number) {
    this.current = number;
//    console.log(this.current);
  }
}
