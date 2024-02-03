import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMobileMenu: boolean = false;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  } 

}
