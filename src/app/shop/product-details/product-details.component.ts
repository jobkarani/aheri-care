import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../../Interfaces/api-response';
import { ProductServiceService } from '../../Services/product-service.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  singleproduct:ApiResponse[] = [];
  id:number = 0;
  phonenumber: number = 254742964456;

  constructor(private api : ProductServiceService,private route:ActivatedRoute, private meta: Meta) { }

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

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }

  openWhatsApp() {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.singleproduct[0].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.singleproduct[0].new_price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://www.ahericare.com/shop/product-details/${this.singleproduct[0].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }
}
