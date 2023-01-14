import { Component, OnInit } from '@angular/core';
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

  constructor(private homeofferService: HomeofferService) { }


  homeServices: Service[] = [];

  ngOnInit(): void {
    this.homeofferService.getServicesToHome().subscribe(services => {
      this.homeServices = services;
    });
  }
 }
