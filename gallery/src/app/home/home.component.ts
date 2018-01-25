import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'epam-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photoListStream = [
    {"url": "../../assets/images/back0.jpg"}, 
    {"url": "../../assets/images/back1.jpg"}, 
    {"url": "../../assets/images/back2.jpg"}, 
    {"url": "../../assets/images/back3.jpg"}, 
    {"url": "../../assets/images/back4.jpg"}, 
    {"url": "../../assets/images/back5.jpg"} 
  ];
  constructor(public auth: AuthService) {
  }

  
  
  
  ngOnInit() {
  }

}
