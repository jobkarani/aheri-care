import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Interfaces/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  constructor(private http:HttpClient) {}

  service:Service[] = [];

  ngOnInit(): void {
    this.http.get<Service[]>('https://ahericaredbb.up.railway.app/get_services/').subscribe(data =>{
      this.service = data;
      console.log(data);
    })
  }
}