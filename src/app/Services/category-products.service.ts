import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {

  id:number =0;

  constructor(private http :HttpClient) { }

  getCategoryProducts(id:number): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>('https://ahericaredbb.up.railway.app/api_categoryproducts/' + id);
  }
}
