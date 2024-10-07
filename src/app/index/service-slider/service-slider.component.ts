import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Service } from 'src/app/Interfaces/service';
import { HomeofferService } from 'src/app/Services/homeoffer.service';

@Component({
  selector: 'service-slider',
  templateUrl: './service-slider.component.html',
  styleUrls: ['./service-slider.component.css']
})
export class ServiceSliderComponent implements OnInit, OnDestroy {

  homeServices: Service[] = [];
  visibleServices: Service[] = [];
  currentSlideIndex: number = 0;
  autoSlideInterval: any;

  constructor(private homeofferService: HomeofferService, private meta: Meta) {}

  ngOnInit(): void {
    this.homeofferService.getServicesToHome().subscribe(services => {
      this.homeServices = services;
      this.updateVisibleServices();
      this.startAutoSlide();
    });

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  updateVisibleServices(): void {
    this.visibleServices = this.homeServices.slice(this.currentSlideIndex, this.currentSlideIndex + 3);
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5 seconds interval
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 3) % this.homeServices.length;
    this.updateVisibleServices();
  }
}
