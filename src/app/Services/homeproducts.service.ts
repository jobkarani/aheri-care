import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../Interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class HomeproductsService {

  constructor(private http: HttpClient) {}

  // Fetch all products without limiting to a specific number
  getProductsToHome(): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>('https://products-be-api-production.up.railway.app/api_products/');
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
