import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  constructor() { }

  ngOnInit(): void {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menus");
    const navLink = document.querySelectorAll(".nav-links");
  
    const mobileMenu = () => {
      hamburger?.classList.toggle("active")
      navMenu?.classList.toggle("active")
    }
  
    const closeMenu = () => {
      hamburger?.classList.remove("active")
      navMenu?.classList.remove("active")
    }
  
    hamburger?.addEventListener("click" , mobileMenu)
    navLink.forEach((l) => l.addEventListener("click",closeMenu))
  }  

}
