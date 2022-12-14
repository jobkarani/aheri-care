import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../Interfaces/api-response';
import { CategoryProductsService } from '../Services/category-products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  catproducts:ApiResponse[] = [];
  id:number = 0;


  constructor(private api : CategoryProductsService,private route:ActivatedRoute) { }

  ngOnInit(){

    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.api.getCategoryProducts(this.id).subscribe(
          datax =>{
            this.catproducts = datax;
            console.log(this.catproducts)
          }
        )
      }
    );
  }

}
