import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'epam-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
 openedMenu = false;
 displayed = 0;
 color = ["#2980b9", "#c0392b", "#1abc9c", "#f39c12", "#8e44ad"];
 n = 0;
 constructor(public auth: AuthService) { 
  }
  login() {
    this.auth.login();
  }  
  logout() {
    this.auth.logout();
  }
  
  changeDisplayed(number: number) {
    this.displayed = number;
    console.log(this.displayed);
  }

}
