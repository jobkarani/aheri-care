import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Interfaces/service';
import { ApiResponse2 } from '../../Interfaces/api-response2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  category:ApiResponse2[] = [];
  service:Service[] = [];

  constructor(private http:HttpClient) {
  }

  ngOnInit(){
    this.http.get<ApiResponse2[]>("https://products-be-api-production.up.railway.app/api_categories/").subscribe(
    data => {
      this.category = data
      console.log(this.category)
    });

    this.http.get<Service[]>('https://products-be-api-production.up.railway.app/get_services/').subscribe(data =>{
      this.service = data;
      console.log(data);
    })
  }

}
