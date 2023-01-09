import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/Interfaces/blogs';
import { Service } from 'src/app/Interfaces/service';
import { HomeofferService } from 'src/app/Services/homeoffer.service';
import { LatestblogService } from 'src/app/Services/latestblog.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {
  constructor( private latestblogService: LatestblogService,private homeofferService: HomeofferService){}

  latestBlogs: Blogs[] = [];
  homeServices: Service[] = [];

  ngOnInit(): void {

    this.latestblogService.getLatestBlogs().subscribe(blogs => {
      this.latestBlogs = blogs;
    });

    this.homeofferService.getServicesToHome().subscribe(services => {
      this.homeServices = services;
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 5000); 
    }

    // testimonials

    // let carouselIndex = 1;
    // showCarousels(carouselIndex);

    // function plusSlides(n: number) {
    //   showCarousels(carouselIndex += n);
    // }

    // function currentSlide(n: number) {
    //   showCarousels(carouselIndex = n);
    // }

    // function showCarousels(n: number) {
    //   let i;
    //   let slides = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
    //   let dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {slideIndex = 1}    
    //   if (n < 1) {carouselIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";  
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[carouselIndex-1].style.display = "block";  
    //   dots[carouselIndex-1].className += " active";
    // }


   
  }
}