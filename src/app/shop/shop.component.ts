import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private http:HttpClient) {}

  prod:any;
  cat:any;

  ngOnInit():void{
    this.prod = this.http.get("https://ahericaredb.up.railway.app/api_products/").subscribe(
      data => this.prod = data
    )
    this.cat = this.http.get("https://ahericaredb.up.railway.app/api_categories/").subscribe(
      data => this.cat = data
    )
  }

}
