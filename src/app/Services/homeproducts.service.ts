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
    return this.http.get<ApiResponse[]>('https://ahericaredbb.up.railway.app/api_products/').pipe(
      map(products => products.slice(0, 4))
    );
  }
}
