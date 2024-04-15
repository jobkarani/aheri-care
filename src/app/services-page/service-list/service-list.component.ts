import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Service } from 'src/app/Interfaces/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  constructor(private http:HttpClient, private meta: Meta) {}

  service:Service[] = [];

  ngOnInit(): void {
    this.http.get<Service[]>('https://products-be-api-production.up.railway.app/get_services/').subscribe(data =>{
      this.service = data;
      console.log(data);
    });

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }
}