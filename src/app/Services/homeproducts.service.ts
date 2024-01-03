import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiResponse } from '../Interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class HomeproductsService {

  constructor(private http: HttpClient) {}

  getProductsToHome() {
    return this.http.get<ApiResponse[]>('https://products-be-api-production.up.railway.app/api_products/').pipe(
      map(products => this.getRandomProducts(products, 4))
    );
  }

  getRandomProducts(products: ApiResponse[], count: number): ApiResponse[] {
    const randomProducts: ApiResponse[] = [];
    const maxIndex = products.length - 1;
  
    while (randomProducts.length < count) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      const product = products[randomIndex];
      if (!randomProducts.includes(product)) {
        randomProducts.push(product);
      }
    }
      
    return randomProducts;
  }
}
