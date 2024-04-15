import { Component, OnInit, OnDestroy } from '@angular/core';
import { Blogs } from 'src/app/Interfaces/blogs';
import { Service } from 'src/app/Interfaces/service';
import { LatestblogService } from 'src/app/Services/latestblog.service';
import { interval, Subscription } from 'rxjs';
import { Meta } from '@angular/platform-browser';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit, OnDestroy {
  
  countTo:any;
  
  constructor( private latestblogService: LatestblogService, private meta: Meta){}

  latestBlogs: Blogs[] = [];
  homeServices: Service[] = [];
  images: Image[] = [
    { src: './assets/Assets/nurse.webp', alt: 'Image 1 description' },
    { src: './assets/Assets/slider2.jpeg', alt: 'Image 2 description' },
    { src: './assets/Assets/slider4.jpeg', alt: 'Image 3 description' },
    { src: './assets/Assets/slider3.jpeg', alt: 'Image 4 description' },
    { src: './assets/Assets/community.jpeg', alt: 'Image 4 description' }
  ];
  currentSlideIndex = 0;
  private intervalSubscription: Subscription | null = null;  
  paused = false;

  ngOnInit(): void {

    this.startAutoplay();

    this.latestblogService.getLatestBlogs().subscribe(blogs => {
      this.latestBlogs = blogs;
    });

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }
  
  ngOnDestroy() {
    this.stopAutoplay();
  }
  nextSlide() {
    if (!this.paused) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    }
  }

  prevSlide() {
    if (!this.paused) {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
    }
  }
  
  startAutoplay() {
    if (!this.intervalSubscription) {
      this.intervalSubscription = interval(3000) 
        .subscribe(() => this.nextSlide());
    }
  }

  stopAutoplay() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      this.intervalSubscription = null;
    }
  }

  pausePlay() {
    this.paused = !this.paused;
    if (this.paused) {
      this.stopAutoplay();
    } else {
      this.startAutoplay();
    }
  }
}