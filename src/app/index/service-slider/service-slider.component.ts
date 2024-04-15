import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Service } from 'src/app/Interfaces/service';
import { HomeofferService } from 'src/app/Services/homeoffer.service';

@Component({
  selector: 'service-slider',
  templateUrl: './service-slider.component.html',
  styleUrls: [
    './service-slider.component.css',
  ]
})
export class ServiceSliderComponent implements OnInit {

  constructor(private homeofferService: HomeofferService, private meta: Meta) { }


  homeServices: Service[] = [];

  ngOnInit(): void {
    this.homeofferService.getServicesToHome().subscribe(services => {
      this.homeServices = services;
    });

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }
 }
