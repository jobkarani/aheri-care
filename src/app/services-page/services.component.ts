import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Service } from '../Interfaces/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(private http:HttpClient) {}

  service:Service[] = [];

  ngOnInit(): void {
    this.http.get<Service[]>('https://ahericaredbb.up.railway.app/get_services/').subscribe(data =>{
      this.service = data;
      console.log(data);
    })
  }
}
