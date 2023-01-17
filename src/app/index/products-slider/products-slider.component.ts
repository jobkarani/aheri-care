import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/Interfaces/api-response';
import { HomeproductsService } from 'src/app/Services/homeproducts.service';

@Component({
  selector: 'products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.css']
})
export class ProductsSliderComponent implements OnInit {

  constructor(private homeproductsService: HomeproductsService) { }

  products: ApiResponse[] = [];
  phonenumber: number = 254742964456;

  ngOnInit(): void {
    this.homeproductsService.getProductsToHome().subscribe(data => {
      this.products = data;
    });
  }

  // whatsapp 
  openWhatsApp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.products[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.products[index].new_price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://www.ahericare.com/shop/product-details/${this.products[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }
 }