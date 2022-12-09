import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {

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

    let carouselIndex = 1;
    showCarousels(carouselIndex);

    function plusSlides(n: number) {
      showCarousels(carouselIndex += n);
    }

    function currentSlide(n: number) {
      showCarousels(carouselIndex = n);
    }

    function showCarousels(n: number) {
      let i;
      let slides = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {carouselIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[carouselIndex-1].style.display = "block";  
      dots[carouselIndex-1].className += " active";
    }
  }

}


