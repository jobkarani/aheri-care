import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ApiResponse } from 'src/app/Interfaces/api-response';
import { HomeproductsService } from 'src/app/Services/homeproducts.service';

@Component({
  selector: 'products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.css']
})
export class ProductsSliderComponent implements OnInit, OnDestroy {

  constructor(private homeproductsService: HomeproductsService, private meta: Meta) { }

  products: ApiResponse[] = [];
  visibleProducts: ApiResponse[] = [];
  phonenumber: number = 254742964456;
  currentSlideIndex: number = 0;
  autoSlideInterval: any;

  ngOnInit(): void {
    this.homeproductsService.getProductsToHome().subscribe(data => {
      this.products = data;
      this.updateVisibleProducts();
      this.startAutoSlide();
    });

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  updateVisibleProducts(): void {
    this.visibleProducts = this.products.slice(this.currentSlideIndex, this.currentSlideIndex + 4);
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 4) % this.products.length;
    this.updateVisibleProducts();
  }

  getDiscountPercentage(index: number): number {
    const discountPercentage = ((this.products[index].old_price - this.products[index].new_price) / this.products[index].new_price) * 100;
    return parseFloat(discountPercentage.toFixed(0));
  }

  openWhatsApp(index: number): void {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.products[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.products[index].new_price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://www.ahericare.com/shop/product-details/${this.products[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }
}
