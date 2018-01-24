import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'epam-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(public auth: AuthService) { 
  }
  login() {
    this.auth.login();
  }  
  logout() {
    this.auth.logout();
  }


}
