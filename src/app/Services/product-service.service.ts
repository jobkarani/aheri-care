import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Productdetails } from '../Interfaces/productdetails';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  id:number =0;

  constructor(private http :HttpClient) { }

  getProductDetails(id:number): Observable<Productdetails[]> {
    return this.http.get<Productdetails[]>('https://ahericaredbb.up.railway.app/getProductDetails/' + id);
  }
}
