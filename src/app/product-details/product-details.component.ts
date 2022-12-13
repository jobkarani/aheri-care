import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productdetails } from '../Interfaces/productdetails';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  singleproduct!:Productdetails;
  product_id:number = 0;

  constructor(private api : ProductServiceService,private route:ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(
      data =>{
        this.product_id = data['product_id'];
      }
    );
    this.api.getProductDetails(this.product_id).subscribe(
      data =>{
        this.singleproduct = data;
      }
    )  

  }
}
