import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response';
import { ApiResponse2 } from '../api-response2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:ApiResponse[] = [];
  category:ApiResponse2[] = [];

  constructor(private http:HttpClient) {}

  ngOnInit(){

    this.http.get<ApiResponse[]>("https://ahericaredb.up.railway.app/api_products/").subscribe(

      data => {
        this.product = data
        console.log(this.product)
      }
    )

    this.http.get<ApiResponse2[]>("https://ahericaredb.up.railway.app/api_categories/").subscribe(

      data => {
        this.category = data
        console.log(this.category)
      }
    )
    
  }

}
