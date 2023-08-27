import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoryproducts } from '../../Interfaces/categoryproducts';
import { CategoryProductsService } from '../../Services/category-products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  catproducts:Categoryproducts[] = [];
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

  getDiscountPercentage(index:number) {
    const discountPercentage =  ((this.catproducts[index].old_price - this.catproducts[index].new_price) / this.catproducts[index].new_price) * 100;
    return parseFloat(discountPercentage.toFixed(0));
  }

}
