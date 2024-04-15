import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoryproducts } from '../../Interfaces/categoryproducts';
import { CategoryProductsService } from '../../Services/category-products.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  catproducts:Categoryproducts[] = [];
  id:number = 0;


  constructor(private api : CategoryProductsService,private route:ActivatedRoute, private meta: Meta) { }

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

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }

  getDiscountPercentage(index:number) {
    const discountPercentage =  ((this.catproducts[index].old_price - this.catproducts[index].new_price) / this.catproducts[index].new_price) * 100;
    return parseFloat(discountPercentage.toFixed(0));
  }

}
