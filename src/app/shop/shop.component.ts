import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiResponse } from '../api-response';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  product:ApiResponse[] = [];

  constructor(private http:HttpClient) {}

  ngOnInit(){

    this.http.get<ApiResponse[]>("https://ahericaredb.up.railway.app/api_products/").subscribe(

      data => {
        this.product = data
        console.log(this.product)
      }
    )
    
  }

}
