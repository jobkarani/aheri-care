import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../Interfaces/api-response';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  singleproduct:ApiResponse[] = [];
  id:number = 0;

  constructor(private api : ProductServiceService,private route:ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.api.getProductDetails(this.id).subscribe(
          datax =>{
            this.singleproduct = datax;
            console.log(this.singleproduct)
          }
        )
      }
    );

  }
}
